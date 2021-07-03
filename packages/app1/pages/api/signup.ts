import nextConnect from "next-connect";
import database from "./middleware/database";
import { ObjectId } from "mongodb";
import {
  createToken,
  hashPassword,
  NextApiRequestWithDb,
  setTokenCookie,
  TokenPayload,
} from "./util";
import type { NextApiResponse } from "next";
import jwtDecode from "jwt-decode";

const handler = nextConnect();

handler.use(database);

handler.post(async (req: NextApiRequestWithDb, res: NextApiResponse) => {
  try {
    const {
      email,
      firstName,
      lastName,
      // password
    } = req.body;

    const hashedPassword = await hashPassword(req.body.password);

    const userData = {
      email: email.toLowerCase(),
      firstName,
      lastName,
      password: hashedPassword,
      role: "admin",
    };

    const existingEmail = await req.db.collection("users").findOne({
      email,
    });

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = await req.db.collection("users").insertOne(userData);

    const insertedUser = await req.db
      .collection("users")
      // @ts-expect-error
      .findOne({ _id: ObjectId(newUser.insertedId) });

    if (insertedUser) {
      const { _id, firstName, lastName, email, role } = insertedUser;

      const userInfo = {
        _id,
        firstName,
        lastName,
        email,
        role,
      };

      const token = createToken(userInfo);

      const decoded = jwtDecode<TokenPayload>(token);

      const { exp } = decoded;

      setTokenCookie(res, token);

      res.json({
        message: "User created!",
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
