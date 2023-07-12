import { NextResponse } from "next/server";
import userCheck from "./userCheck";

const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { email, username } = data;
    const response = await userCheck({ email, username });
    console.log(response);
    if (response && response.ok) {
      const nextResponse = new NextResponse(JSON.stringify(response));
      nextResponse.cookies.set(
        "userInfo",
        JSON.stringify({ email, username }),
        {
          maxAge: 60,
        }
      );
      return nextResponse;
    } else {
      return new Response(JSON.stringify(response));
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.error(); // You can return a suitable error response here
  }
};

export { POST };
