import { NextResponse } from "next/server";

// export const runtime = "edge";

// receive a POST request from the frontend
// save data to database
// let frontend know whether it worked or not

export async function POST(request: Request) {
  const received = await request.json();
  console.log("received" + received);

  return NextResponse.json({ received });
}
