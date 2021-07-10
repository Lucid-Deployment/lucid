import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
import type { NextApiResponse } from "next";
import { NextApiRequestWithDb } from "../../../features/identity/util";

const client = new MongoClient(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(
  req: NextApiRequestWithDb,
  _res: NextApiResponse,
  next: () => void
) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("app1");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
