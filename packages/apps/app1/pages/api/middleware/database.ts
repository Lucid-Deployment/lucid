import nextConnect from "next-connect";
import type { NextApiResponse } from "next";
import client, { dbName } from "../../../lib/mongodbConn";
import { NextApiRequestWithDb } from "../../../features/identity/util";

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

export default middleware;
