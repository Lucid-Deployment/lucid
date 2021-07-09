import { Error } from "../../../util/api-interfaces";
export interface CreateRequestData {
  message: string;
}

export interface CreateRequestError extends Omit<Error, "message"> {
  message: string;
}
