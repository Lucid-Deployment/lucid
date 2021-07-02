import * as React from "react"
import { useSafeDispatch } from "./safe-dispatch"

function asyncReducer<TData, TError>(
  state: State<TData, TError>,
  action: any,
): State<TData, TError> {
  switch (action.type) {
    case "pending": {
      return { ...state, status: "pending", data: null, error: null }
    }
    case "resolved": {
      return { ...state, status: "resolved", data: action.data, error: null }
    }
    case "rejected": {
      return { ...state, status: "rejected", data: null, error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export type AsyncStatus = "idle" | "resolved" | "pending" | "rejected"

interface State<TData, TError> {
  status: "idle" | "resolved" | "pending" | "rejected"
  data: TData | null
  error: TError | null
}

function useAsync<TData, TError>(initialState: Partial<State<TData, TError>>) {
  const [state, unsafeDispatch] = React.useReducer<
    React.Reducer<State<TData, TError>, any>
  >(
    asyncReducer,
    {
      status: "idle",
      data: null,
      error: null,
      ...initialState,
    },
    undefined,
  )

  const dispatch = useSafeDispatch(unsafeDispatch)

  const { data, error, status } = state

  const run = React.useCallback(
    (promise) => {
      dispatch({ type: "pending" })
      promise.then(
        (data: TData) => {
          dispatch({ type: "resolved", data })
        },
        (error: TError) => {
          dispatch({ type: "rejected", error })
        },
      )
    },
    [dispatch],
  )

  const setData = React.useCallback(
    (data) => dispatch({ type: "resolved", data }),
    [dispatch],
  )
  const setError = React.useCallback(
    (error) => dispatch({ type: "rejected", error }),
    [dispatch],
  )
  const setIsLoading = React.useCallback(() => dispatch({ type: "pending" }), [
    dispatch,
  ])

  return {
    setData,
    setError,
    setIsLoading,
    error,
    status,
    data,
    run,
  }
}

export { useAsync }
