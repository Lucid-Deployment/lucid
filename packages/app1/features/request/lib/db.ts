import client, { dbName } from "../../../lib/mongodbConn";

export interface Request {
  name: string;
  subject: string;
  email: string;
}

export async function createRequest(doc: Request): Promise<undefined> {
  try {
    if (!client.isConnected()) {
      await client.connect();
    }

    const db = client.db(dbName);

    const requests = db.collection("requests");
    const result = await requests.insertOne(doc);

    if (result.insertedCount === 0) {
      return Promise.reject();
    }
  } catch (err: unknown) {
    return Promise.reject();
  } finally {
    client.close();
  }
}
