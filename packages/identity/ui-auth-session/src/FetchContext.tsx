import * as React from "react";
import type { ApiError } from "@lucid/util-data-access";
import type { Error as IError } from "@lucid/api-interfaces";
import { client } from "@lucid/util-data-access";

export type AuthFetchError = ApiError<IError> | { message: string };

type FetchContextValue = {
  authFetch: (
    endpoint: string,
    config?: RequestInit & {
      data?: unknown;
    }
  ) => Promise<any>;
};

const FetchContext = React.createContext<undefined | FetchContextValue>(
  undefined
);
FetchContext.displayName = "FetchContext";
const { Provider } = FetchContext;

const FetchProvider = ({ children }: { children?: React.ReactNode }) => {
  // const authContext = useAuth();

  // TODO: cookie support
  const authFetch: FetchContextValue["authFetch"] = (endpoint, config) =>
    client<IError>(endpoint, {
      ...config,
    }).catch(async (error: unknown) => {
      const err: ApiError<IError> = error as any;
      // We haven't gotten response from the server
      if (err instanceof Error) {
        throw err;
      }

      const code = err?.status ?? 0;

      // If the user's token expires or the user does something they're not supposed to, the backend can send a 401 request.
      // If that happens, then we'll want to log the user out and refresh the page automatically so all data is removed from the page.
      if (code === 401) {
        await client<IError>("logout", {
          method: "DELETE",
        }).catch(console.error);
        window.location.assign(String(window.location));
        return Promise.reject({ message: "Please re-authenticate." });
      }

      throw err;
    });

  return (
    <Provider
      value={{
        authFetch,
      }}
    >
      {children}
    </Provider>
  );
};

function useFetch() {
  const context = React.useContext(FetchContext);

  if (!context) {
    throw new Error("useFetch must be used within a FetchProvider");
  }

  return context;
}

export { FetchContext, FetchProvider, useFetch };
