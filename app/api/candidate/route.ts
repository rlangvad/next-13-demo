import { NextResponse } from "next/server";
import candidates from "../candidates.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const delay = searchParams.get("delay");

  try {
    const candidate = candidates.find((candidate) => candidate.id === id);

    await new Promise((resolve) => setTimeout(resolve, Number(delay)));

    return Response.json(candidate);
    // return NextResponse.json({ status: 500 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
