export async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Gagal memuat data");
  return res.json();
}
