import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const res = await fetch("https://n8n-production-efb7f.up.railway.app/webhook/28af4c12-8598-45b7-a3af-66e6c2512d59", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

const text = await res.text(); // pakai .text() dulu bukan .json()
    console.log("n8n response:", text); // cek di terminal

    return NextResponse.json({ message: text });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error?.message || String(error) },
      { status: 500 }
    );
  }
}