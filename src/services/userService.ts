import { request } from "./request";

export const login = async (code: string) => {
  const response = await request.post("/login", { code });
  return response.data;
};
