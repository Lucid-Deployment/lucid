import { validationSchema } from "@lucid/request-application";
import { NextApiRequest, NextApiResponse } from "next";
import { ValidationError } from "yup";
import { createRequest } from "@lucid/request-db";
import type {
  CreateRequestData,
  CreateRequestError,
} from "@lucid/request-api-interfaces";
import * as messages from "../../lib/messages";
import client, { dbName } from "../../lib/mongodbConn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { subject, email, name } = req.body;

    try {
      await validationSchema.validate({ subject, email, name });
    } catch (err: unknown) {
      res.status(401).json({ errors: (err as ValidationError).errors });
      return;
    }

    try {
      const data: CreateRequestData = {
        message: "Your message is delivered.",
      };
      await createRequest({ subject, email, name }, client, dbName);
      res.status(201).json(data);
    } catch (err: unknown) {
      const error: CreateRequestError = {
        message: messages.api.unexpectedError,
      };
      res.status(500).json(error);
    }
  }
}
