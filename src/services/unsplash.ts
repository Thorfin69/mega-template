const UNSPLASH_BASE = 'https://api.unsplash.com';
const FALLBACK = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop';

export async function searchPhoto(query: string): Promise<string> {
  const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

  try {
    const res = await fetch(
      `${UNSPLASH_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${key}` } }
    );

    if (!res.ok) return FALLBACK;

    const data = await res.json() as { results: Array<{ urls: { regular: string } }> };
    return data.results[0]?.urls.regular ?? FALLBACK;
  } catch {
    return FALLBACK;
  }
}
