import db from "@lib/db";
import { AccountValues } from "@login/page";

const userCheck = async (data: AccountValues) => {
  const { email, username } = data;
  try {
    await db?.user.findUnique({
      where: {
        email,
        username,
      },
    });
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};

export default userCheck;
