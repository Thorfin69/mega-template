// Calls OpenRouter directly from the browser — avoids Vercel's 10s serverless timeout
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MAX_RETRIES = 3;

export const AVAILABLE_MODELS = [
  { id: 'openai/gpt-4o-mini',                    label: 'GPT-4o Mini',  badge: 'Fast' },
  { id: 'openai/gpt-5-nano',                      label: 'GPT-5 Nano',   badge: 'New'  },
  { id: 'minimax/minimax-m2.5:free',              label: 'MiniMax M2.5', badge: 'Free' },
  { id: 'meta-llama/llama-3.1-8b-instruct:free', label: 'Llama 3.1 8B', badge: 'Free' },
];

export const DEFAULT_MODEL = AVAILABLE_MODELS[0].id;

async function chat(system: string, prompt: string, model: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY as string;
  if (!apiKey) throw new Error('VITE_OPENROUTER_API_KEY is not set');

  let lastError = 'Unknown error';

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Blitz Studio',
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 4096,
        }),
      });

      if (!res.ok) {
        lastError = `API error ${res.status}: ${await res.text()}`;
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }

      const data = await res.json() as {
        choices?: Array<{ message: { content: string } }>;
        error?: { message: string };
      };

      if (data.error) {
        lastError = `OpenRouter: ${data.error.message}`;
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }

      if (!data.choices || data.choices.length === 0) {
        lastError = 'No choices returned';
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }

      return data.choices[0].message.content;

    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      if (attempt < MAX_RETRIES) await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }

  throw new Error(lastError);
}

function extractJson(text: string): unknown {
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    try { return JSON.parse(fenceMatch[1].trim()); } catch { /* fall through */ }
  }
  try { return JSON.parse(text.trim()); } catch { /* fall through */ }
  const objMatch = text.match(/(\{[\s\S]*\})/);
  if (objMatch) {
    try { return JSON.parse(objMatch[1]); } catch { /* fall through */ }
  }
  const arrMatch = text.match(/(\[[\s\S]*\])/);
  if (arrMatch) {
    try { return JSON.parse(arrMatch[1]); } catch { /* fall through */ }
  }
  throw new Error(`Could not parse AI response as JSON.\n\nRaw:\n${text.slice(0, 500)}`);
}

export interface RefinedBrief {
  businessName: string;
  industry: string;
  valueProp: string;
  targetAudience: string;
  tone: string;
  keyPoints: string[];
}

export async function refineDescription(rawDescription: string, model: string = DEFAULT_MODEL): Promise<RefinedBrief> {
  const result = await chat(
    'You are a professional web copywriter. Extract structured information from a client description. Return ONLY valid JSON, no markdown, no explanation.',
    `Client description: "${rawDescription}"

Return this exact JSON structure:
{
  "businessName": "name of the business or product",
  "industry": "specific industry/niche",
  "valueProp": "one compelling sentence value proposition",
  "targetAudience": "who they are targeting",
  "tone": "professional|friendly|bold|technical|warm (pick one)",
  "keyPoints": ["key differentiator 1", "key differentiator 2", "key differentiator 3"]
}`, model
  );
  return extractJson(result) as RefinedBrief;
}

export async function generateContent(
  brief: RefinedBrief,
  templateContentMd: string,
  model: string = DEFAULT_MODEL
): Promise<Record<string, string>> {
  const trimmedContent = templateContentMd.slice(0, 3000);

  const briefText = `Business: ${brief.businessName}
Industry: ${brief.industry}
Value Proposition: ${brief.valueProp}
Target Audience: ${brief.targetAudience}
Tone: ${brief.tone}
Key Points: ${brief.keyPoints.join(', ')}`;

  const result = await chat(
    `You are an expert web copywriter. Generate copy for every content slot.
Rules:
- Match the specified tone
- For image slots output: UNSPLASH:<search query>
- For href slots keep existing placeholder unchanged
- Return ONLY a flat JSON object: { "slot_id": "value" }
- No markdown, no explanation, only raw JSON`,
    `Client Brief:\n${briefText}\n\nTemplate Slots:\n${trimmedContent}\n\nReturn flat JSON only.`,
    model
  );
  return extractJson(result) as Record<string, string>;
}
