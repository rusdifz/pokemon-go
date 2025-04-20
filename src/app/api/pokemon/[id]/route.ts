import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  // Proxy request ke PokeAPI
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    return NextResponse.json({ error: "Pokemon not found" }, { status: 404 });
  }
  const data = await res.json();
  // Tambahkan caching: revalidate setiap 60 detik
  return NextResponse.json(data, {
    status: 200,
    headers: { "Cache-Control": "public, max-age=60" },
  });
}
