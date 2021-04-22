import nextConnect from "next-connect"
import { serialize } from "cookie"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = nextConnect()

handler.delete(async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cookie = serialize("token", "", {
      maxAge: -1,
      path: "/",
    })

    res.setHeader("Set-Cookie", cookie)
    res.json({ message: "Logged out" })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: "Something went wrong." })
  }
})

export default handler
