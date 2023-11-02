import { NextResponse } from "next/server";
import candidates from "../candidates.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const delay = searchParams.get("delay");

  try {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));

    return Response.json(candidates);

    // return NextResponse.json({ status: 500 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
