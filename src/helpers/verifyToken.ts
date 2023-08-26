import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const verifyToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    if (decodedToken.id) {
      return {
        message: "Authenticated Successflly",
        status: 200,
        user: decodedToken,
      };
    }
  } catch (error: any) {
    return {
      message: error.message,
      status: 401,
    };
  }
};
