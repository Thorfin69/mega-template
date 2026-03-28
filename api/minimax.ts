export const config = { maxDuration: 60 };

// Node.js serverless function — supports up to 60s timeout unlike edge (25s max)
export default async function handler(
  req: { method?: string; body?: Record<string, unknown> },
  res: {
    status: (code: number) => { json: (d: unknown) => void };
    json: (d: unknown) => void;
  }
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY is not configured' });
  }

  const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'HTTP-Referer': 'https://blitzstudio.vercel.app',
      'X-Title': 'Blitz Studio',
    },
    body: JSON.stringify(req.body),
  });

  const data = await upstream.json();
  return res.status(upstream.status).json(data);
}
