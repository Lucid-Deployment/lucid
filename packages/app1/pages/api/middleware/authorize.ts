import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

async function authorize(
  _req: NextApiRequest,
  res: NextApiResponse,
  _next: () => void
) {
  try {
  } catch (err) {
    return res.status(401).json({ message: "Not authorized" });
  }
}

const middleware = nextConnect();

middleware.use(authorize);

export default middleware;
