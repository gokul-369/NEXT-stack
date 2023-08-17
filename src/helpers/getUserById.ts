import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const encToken = request.cookies.get("token")?.value || "";
    const decToken: any = jwt.verify(
      encToken,
      process.env.TOKEN_SECRET!
    );
    return decToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
