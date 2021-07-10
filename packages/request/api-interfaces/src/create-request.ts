import type { Error } from "@lucid/api-interfaces";

export interface CreateRequestData {
  message: string;
}

export interface CreateRequestError extends Omit<Error, "errors" | "message"> {
  message: string;
}
