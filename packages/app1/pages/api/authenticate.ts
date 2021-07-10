import nextConnect from "next-connect";
import jwtDecode from "jwt-decode";
import database from "./middleware/database";
import {
  createToken,
  NextApiRequestWithDb,
  setTokenCookie,
  TokenPayload,
  verifyPassword,
} from "../../features/identity/util";
import type { NextApiResponse } from "next";
import { User } from "../../features/identity";
import { AuthenticateInput } from "@lucid/identity-api-interfaces";

const handler = nextConnect();

handler.use(database);

handler.post(async (req: NextApiRequestWithDb, res: NextApiResponse) => {
  try {
    const { email, password } = req.body as AuthenticateInput;

    const user: User = await req.db.collection("users").findOne({
      email,
    });

    if (!user) {
      return res.status(403).json({
        message: "Wrong email or password.",
      });
    }

    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const { password, bio, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });

      const token = createToken(userInfo);

      const decoded = jwtDecode<TokenPayload>(token);

      const { exp } = decoded;

      setTokenCookie(res, token);

      res.json({
        message: "Authentication successful!",
        userInfo,
        expiresAt: exp,
      });
    } else {
      res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong." });
  }
});

export default handler;
