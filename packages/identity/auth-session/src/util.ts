import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { serialize, parse } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@lucid/identity-domain";
import { Db, MongoClient } from "mongodb";
import { UserInfo } from "@lucid/identity-api-interfaces";

const createToken = (user: Omit<User, "password">) => {
  // Sign the JWT
  if (!user.role) {
    throw new Error("No user role specified");
  }

  const payload: Omit<TokenPayload, "exp"> = {
    sub: user._id,
    email: user.email,
    role: user.role,
    iss: "api.app1",
    aud: "api.app1",
  };

  return jwt.sign(payload, "secret123", {
    algorithm: "HS256",
    expiresIn: "1h",
  });
};

export type TokenPayload = {
  sub: User["_id"];
  email: User["email"];
  role: User["role"];
  iss: string;
  aud: string;
  exp: number;
};

const hashPassword = (password: string) => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const verifyPassword = (passwordAttempt: string, hashedPassword: string) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

export type NextApiRequestWithDb<
  TRequest extends NextApiRequest = NextApiRequest
> = TRequest & {
  dbClient: MongoClient;
  db: Db;
};

export type NextApiRequestWithUser<
  TRequest extends NextApiRequest = NextApiRequest
> = TRequest & {
  user: UserInfo;
};

const requireAdmin = (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
  next: () => void
) => {
  if (!req.user) {
    return res.status(401).json({
      message: "There was a problem authorizing the request",
    });
  }
  if (req.user.role !== "admin") {
    return res.status(401).json({ message: "Insufficient role" });
  }
  next();
};

const TOKEN_NAME = "token";
const MAX_AGE = 3600; // 1 hour

const setTokenCookie = (res: NextApiResponse, token: string) => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  res.setHeader("Set-Cookie", cookie);
};

const removeTokenCookie = (res: NextApiResponse) => {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
};

const parseCookies = (req: NextApiRequest) => {
  if (req.cookies) return req.cookies;

  const cookie = req.headers?.cookie;
  return parse(cookie || "");
};

const getTokenCookie = (req: NextApiRequest) => {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
};

export {
  createToken,
  hashPassword,
  verifyPassword,
  requireAdmin,
  setTokenCookie,
  getTokenCookie,
  parseCookies,
  removeTokenCookie,
};
