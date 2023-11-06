import { NextResponse } from "next/server";

const data = [
  {
    title: "Today",
    value: 29,
  },
  {
    title: "This week",
    value: 46,
  },
  {
    title: "Last week",
    value: 98,
  },
  {
    title: "This month",
    value: 231,
  },
  {
    title: "Numbers",
    value: "435",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const delay = searchParams.get("delay");

  await new Promise((resolve) => setTimeout(resolve, Number(delay)));

  return NextResponse.json(data);
  // return NextResponse.json({ status: 500 });
}
