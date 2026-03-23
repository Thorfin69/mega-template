const FALLBACK = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop';

export async function searchPhoto(query: string): Promise<string> {
  try {
    const res = await fetch(`/api/unsplash?query=${encodeURIComponent(query)}`);

    if (!res.ok) return FALLBACK;

    const data = await res.json() as { results: Array<{ urls: { regular: string } }> };
    return data.results[0]?.urls.regular ?? FALLBACK;
  } catch {
    return FALLBACK;
  }
}
