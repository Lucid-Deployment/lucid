export interface ResponseError extends Error {
  status?: number;
}

export const isResponseError = (err: unknown): err is ResponseError => {
  return (
    err instanceof Error &&
    ((err as any).status === undefined ||
      typeof (err as any).status === "number")
  );
};
