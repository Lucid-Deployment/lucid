import { match } from "node-match-path"
import type { ResponseComposition, RestContext, RestRequest } from "msw"
import type { RestHandler } from "msw/lib/types/handlers/RestHandler"
import type { ResponseError } from "./response-error"
import { isResponseError } from "./response-error"

let sleep: (time?: number) => Promise<void>
if (process.env.CI) {
  sleep = () => Promise.resolve()
} else if (process.env.NODE_ENV === "test") {
  sleep = () => Promise.resolve()
} else {
  sleep = (
    t = Math.random() * ls("__store_variable_request_time__", 400) +
      ls("__store_min_request_time__", 400),
  ) => new Promise((resolve) => setTimeout(resolve, t))
}

function ls(key: string, defaultVal: number) {
  const lsVal = window.localStorage.getItem(key)
  let val
  if (lsVal) {
    val = Number(lsVal)
  }
  return val !== undefined && Number.isFinite(val) ? val : defaultVal
}

function shouldFail(req: RestRequest) {
  type RequestMatch = {
    requestMethod: string
    urlMatch: string
  }

  let failConfig: RequestMatch[] | undefined
  try {
    failConfig = JSON.parse(
      window.localStorage.getItem("__store_request_fail_config__") || "[]",
    )
  } catch (err: unknown) {
    window.localStorage.removeItem("__store_request_fail_config__")
  }

  function requestMatchesFailConfig() {
    return failConfig?.some(
      ({ requestMethod, urlMatch }: RequestMatch) =>
        (requestMethod === "ALL" || req.method === requestMethod) &&
        match(urlMatch, req.url.pathname).matches,
    )
  }

  function failForcedByUser() {
    return (
      JSON.stringify(req.body)?.includes("FAIL") ||
      req.url.searchParams.toString()?.includes("FAIL")
    )
  }

  if (failForcedByUser()) {
    return true
  }

  if (process.env.NODE_ENV === "test") {
    return false
  }

  const failureRate = Number(
    window.localStorage.getItem("__store_failure_rate__") || 0,
  )
  if (Math.random() < failureRate) {
    return true
  }

  return requestMatchesFailConfig()
}

async function resolve(
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
  originalResolver: () => ReturnType<RestHandler["resolver"]>,
) {
  const errorResponse = (err: ResponseError) => {
    const status = err.status || 500

    return res(
      ctx.status(status),
      ctx.json({ status, message: err.message || "Unknown Error" }),
    )
  }

  try {
    if (shouldFail(req)) {
      return errorResponse(new Error("Request failure (for testing purposes)."))
    }

    return await originalResolver()
  } catch (err: unknown) {
    if (isResponseError(err)) {
      return errorResponse(err)
    } else {
      throw err
    }
  } finally {
    await sleep()
  }
}

// It's not work, so should be repeated in any handler intended for development environment
/*
handlers.map((handler) => ({
  ...handler,
  async resolver(
    req: RestRequest,
    res: ResponseComposition,
    ctx: RestContext
  ) {
    return resolve(req, res, ctx, handler.resolver(req, res, ctx));
  },
}))
*/

export { resolve }
