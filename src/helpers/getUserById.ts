import jwt from "jsonwebtoken";

export const getDataFromToken = (token: any) => {
  try {
    // const encToken = request.cookies.get("token")?.value || "";
    console.log(token);

    const decToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
