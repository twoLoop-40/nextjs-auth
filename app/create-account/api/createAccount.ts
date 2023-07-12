"use server";

import { NextResponse } from "next/server";
import { CreateAccountValues } from "../page";
import db from "@/lib/db";

const createAccountServer = async (data: CreateAccountValues) => {
  const { email, username } = data;
  try {
    await db?.user.create({
      data: {
        email,
        username,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default createAccountServer;
