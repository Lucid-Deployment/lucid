import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

async function authorizeAdmin(
  _req: NextApiRequest,
  res: NextApiResponse,
  _next: () => void
) {
  try {
  } catch (err: unknown) {
    return res.status(401).json({ message: "Not authorized" });
  }
}

const middleware = nextConnect();

middleware.use(authorizeAdmin);

export default middleware;
