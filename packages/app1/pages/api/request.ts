import { validationSchema } from "../../features/request/lib/validation";
import { NextApiRequest, NextApiResponse } from "next";
import { ValidationError } from "yup";
import { Error } from "../../util/api-interfaces";
import { createRequest } from "../../features/request/lib/db";
import { CreateRequestData } from "../../features/request/api-interfaces/create-request";

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
      await createRequest({ subject, email, name });
      res.status(201).json(data);
    } catch (err: unknown) {
      const error: Error = {
        message: "Server error occured. Please, try again in a few minutes.",
        errors: [],
      };
      res.status(500).json(error);
    }
  }
}
