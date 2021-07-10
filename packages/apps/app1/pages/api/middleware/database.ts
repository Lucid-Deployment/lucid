import nextConnect from "next-connect";
import type { NextApiResponse } from "next";
import client, { dbName } from "../../../lib/mongodbConn";
import { NextApiRequest } from "next";
import { Db, MongoClient } from "mongodb";

async function database(
  req: NextApiRequestWithDb,
  _res: NextApiResponse,
  next: () => void
) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(dbName);
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export type NextApiRequestWithDb<
  TRequest extends NextApiRequest = NextApiRequest
> = TRequest & {
  dbClient: MongoClient;
  db: Db;
};

export default middleware;
