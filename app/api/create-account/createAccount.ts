import db from "@lib/db";
import { AccountValues } from "@login/page";

const createAccountServer = async (data: AccountValues) => {
  const { email, username } = data;
  try {
    await db?.user.create({
      data: {
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

export default createAccountServer;
