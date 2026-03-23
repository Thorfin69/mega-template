const API_URL = '/api/minimax/text/chatcompletion_v2';

interface MinimaxMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

async function chat(messages: MinimaxMessage[]): Promise<string> {
  const apiKey = import.meta.env.VITE_MINIMAX_API_KEY as string;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'MiniMax-Text-01',
      messages,
      temperature: 0.7,
      max_tokens: 4096,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Minimax API error ${res.status}: ${err}`);
  }

  const data = await res.json() as { choices: Array<{ message: { content: string } }> };
  return data.choices[0].message.content;
}

function extractJson(text: string): unknown {
  const match = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = match ? match[1].trim() : text.trim();
  return JSON.parse(raw);
}

export interface RefinedBrief {
  businessName: string;
  industry: string;
  valueProp: string;
  targetAudience: string;
  tone: string;
  keyPoints: string[];
}

export async function refineDescription(rawDescription: string): Promise<RefinedBrief> {
  const result = await chat([
    {
      role: 'system',
      content:
        'You are a professional web copywriter. Extract structured information from a client description. Return ONLY valid JSON, no markdown, no explanation.',
    },
    {
      role: 'user',
      content: `Client description: "${rawDescription}"

Return this exact JSON structure:
{
  "businessName": "name of the business or product",
  "industry": "specific industry/niche",
  "valueProp": "one compelling sentence value proposition",
  "targetAudience": "who they are targeting",
  "tone": "professional|friendly|bold|technical|warm (pick one)",
  "keyPoints": ["key differentiator 1", "key differentiator 2", "key differentiator 3"]
}`,
    },
  ]);

  return extractJson(result) as RefinedBrief;
}

export async function generateContent(
  brief: RefinedBrief,
  templateContentMd: string
): Promise<Record<string, string>> {
  const briefText = `Business: ${brief.businessName}
Industry: ${brief.industry}
Value Proposition: ${brief.valueProp}
Target Audience: ${brief.targetAudience}
Tone: ${brief.tone}
Key Points: ${brief.keyPoints.join(', ')}`;

  const result = await chat([
    {
      role: 'system',
      content: `You are an expert web copywriter. Given a client brief and a template content slot map, generate compelling copy for every slot.

Rules:
- Respect character limits strictly
- Match the specified tone
- For image URL slots, output: UNSPLASH:<search query> (e.g. UNSPLASH:travel nurse hospital corridor)
- For href/link slots, keep the existing placeholder value unchanged (e.g. #contact, #apply)
- Return ONLY a flat JSON object: { "slot_id": "generated value" }
- Cover all required slots
- No markdown, no explanation, only raw JSON`,
    },
    {
      role: 'user',
      content: `Client Brief:\n${briefText}\n\nTemplate Content Slots:\n${templateContentMd}\n\nGenerate values for all slots. Return flat JSON only.`,
    },
  ]);

  return extractJson(result) as Record<string, string>;
}
