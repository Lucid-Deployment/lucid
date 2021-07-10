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

    await client.close();
    if (result.insertedCount === 0) {
      return Promise.reject();
    } else {
      return;
    }
  } catch (err: unknown) {
    await client.close();
    return Promise.reject();
  }
}
