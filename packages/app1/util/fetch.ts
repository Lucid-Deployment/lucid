import { client } from '@lucid/util-data-access';
import { Errors } from '@lucid/identity-api-interfaces';

const apiURL = process.env.NEXT_API_URL;

const publicFetch = (
  endpoint: string,
  config?: RequestInit & {
    data?: unknown;
    token?: string;
  },
) => client<Errors>(`${apiURL}/${endpoint}`, config);

export { publicFetch };
