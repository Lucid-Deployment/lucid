import type { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { field1 } = req.body
  const { pid } = req.query
  res.json({ field1, pid })
}
