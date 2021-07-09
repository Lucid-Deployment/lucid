import { MongoClient } from "mongodb";

const dbName = process.env.ATLAS_DB;

const uri = process.env.ATLAS_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });

export default client;

export { dbName };
