import type { Request } from "@lucid/request-domain";
import type { MongoClient } from "mongodb";

export async function createRequest(
  doc: Request,
  client: MongoClient,
  dbName: string
): Promise<undefined> {
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
