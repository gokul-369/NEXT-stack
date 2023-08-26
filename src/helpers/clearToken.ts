import { NextResponse } from "next/server";

export const clearToken = () => {
  const response = NextResponse.json({
    message: "Unauthorized",
    status: 401,
  });
  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return response;
};
