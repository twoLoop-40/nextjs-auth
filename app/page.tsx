import Home from "@components/home";
import { cookies } from "next/dist/client/components/headers";

export default function Page() {
  const cookieStore = cookies();
  const userInfoString = cookieStore.get("userInfo")?.value;
  if (userInfoString) {
    const userInfo = JSON.parse(userInfoString);
    return <Home {...userInfo} />;
  } else {
    return <Home />;
  }
}
