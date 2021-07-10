import { client } from "@lucid/util-data-access";
import { Error } from "@lucid/app1-api-interfaces";

const publicFetch = (
  endpoint: string,
  config?: RequestInit & {
    data?: unknown;
    token?: string;
  }
) => client<Error>(endpoint, config);

export { publicFetch };