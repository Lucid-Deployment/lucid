import { client as baseClient } from "./api-client-base"

export type ApiError<ErrorData> =
  | Error
  | { status: number; type: "invalidBody" }
  | (Response & { _data: ErrorData })

const client = <ErrorData>(
  url: string,
  config?: RequestInit & { data?: unknown; token?: string },
) =>
  baseClient(url, config).then(async (res) => {
    let data: any
    try {
      data = await res.json()
    } catch (err) {
      const result: ApiError<ErrorData> = {
        type: "invalidBody",
        status: res.status,
      }
      return Promise.reject(result)
    }

    if (res.ok) {
      return data
    }

    ;(res as Response & { _data: ErrorData })._data = data
    return Promise.reject(res)
  })

export { client }
