import { NextResponse } from "next/server";
import createAccountServer from "./createAccount";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, username } = data;
    const response = await createAccountServer({ email, username });
    if (response) return new Response(JSON.stringify(response));
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.error(); // You can return a suitable error response here
  }
}
