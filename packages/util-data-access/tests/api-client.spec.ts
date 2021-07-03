import { setupServer } from "msw/node";
import { rest } from "msw";
import each from "jest-each";

import { client } from "../src";

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("calls fetch at the endpoint with method GET by default", async () => {
  // Arrange
  const endpoint = "test-endpoint";
  const apiURL = "https://test-api-url.ru";
  const url = `${apiURL}/${endpoint}`;

  const mockResult = { mockValue: "VALUE" };

  server.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.json(mockResult));
    })
  );

  // Act
  const result = await client(url);

  // Assert
  expect(result).toEqual(mockResult);
});

test(`adds auth token when a token is provided`, async () => {
  // Arrange
  const token = "FAKE_TOKEN";

  const apiURL = "https://test-api-url.ru";
  const endpoint = "test-endpoint";
  const url = `${apiURL}/${endpoint}`;

  const mockResult = { mockValue: "VALUE" };

  let request;
  server.use(
    rest.get(url, async (req, res, ctx) => {
      request = req;
      return res(ctx.json(mockResult));
    })
  );

  // Act
  await client(url, { token });

  // Assert
  expect(request.headers.get("Authorization")).toBe(`Bearer ${token}`);
});

test(`allows for config overrides`, async () => {
  // Arrange
  const endpoint = "test-endpoint";
  const apiURL = "https://test-api-url.ru";
  const url = `${apiURL}/${endpoint}`;

  const mockResult = { mockValue: "VALUE" };

  let request;
  server.use(
    rest.get(url, async (req, res, ctx) => {
      request = req;
      return res(ctx.json(mockResult));
    })
  );

  const customConfig = {
    mode: "cors" as const,
    headers: { "Content-Type": "fake-type" },
  };

  // Act
  await client(url, customConfig);

  // Arrange
  expect(request.mode).toBe(customConfig.mode);
  expect(request.headers.get("Content-Type")).toBe(
    customConfig.headers["Content-Type"]
  );
});

test(`when data is provided, but not method, it is stringified and the method defaults to POST`, async () => {
  // Arrange
  const endpoint = "test-endpoint";
  const apiURL = "https://test-api-url.ru";
  const url = `${apiURL}/${endpoint}`;

  server.use(
    rest.post(url, async (req, res, ctx) => {
      return res(ctx.json(req.body));
    })
  );

  const data = { a: "b" };

  // Act
  const result = await client(url, { data });

  // Assert
  expect(result).toEqual(data);
});

each(["GET", "HEAD"]).test(
  `when plain object, not array, data is provided, and method is %s, it is added to url search params, stringifying non-string values`,
  async (method: "GET" | "HEAD") => {
    // Arrange
    const endpoint = "test-endpoint";
    const apiURL = "https://test-api-url.ru";
    const url = `${apiURL}/${endpoint}`;

    server.use(
      rest[method.toLowerCase()](url, async (req, res, ctx) => {
        const searchParamsEntries = Array.from(req.url.searchParams.entries());

        return res(ctx.json(searchParamsEntries));
      })
    );

    const data = { a: "b", b: { c: "d" } };

    // Act
    const result = await client(url, { data, method });

    // Assert
    // By duplicating part of the production code, we can duplicate a mistake, and it's hard to understand
    // expect(result).toEqual(Object.entries(data).map(([key, value]) => [key, typeof value !== 'string' ? JSON.stringify(value) : value]))
    expect(result).toEqual([
      ["a", "b"],
      ["b", JSON.stringify({ c: "d" })],
    ]);
  }
);

// arrays, dates, functions, null, undefined, any primitives
const matrixIgnoredDataByMethods = multiplyArraysEach(
  ["GET", "HEAD"],
  [[1], new Date(), () => {}, null, undefined, 1, "", Symbol(""), true]
);
each(matrixIgnoredDataByMethods).test(
  `when data, which isn't plain object, is provided, and method is %s, it is ignored`,
  async (method: "GET" | "HEAD", data: any) => {
    // Arrange
    const endpoint = "test-endpoint";
    const apiURL = "https://test-api-url.ru";
    const url = `${apiURL}/${endpoint}`;

    server.use(
      rest[method.toLowerCase()](url, async (req, res, ctx) => {
        const searchParamsEntries = Array.from(req.url.searchParams.entries());

        return res(ctx.json(searchParamsEntries));
      })
    );

    // Act
    const result = await client(url, { data, method });

    // Assert
    expect(result).toEqual([]);
  }
);

function multiplyArraysEach(arr1: any[], arr2: any[]) {
  return flatten(multiplyArrays(arr1, arr2));

  function multiplyArrays(arr1: any[], arr2: any[]) {
    return arr1.map((arr1Val) => arr2.map((arr2Val) => [arr1Val, arr2Val]));
  }

  function flatten(arr: any[][]) {
    const result: any[] = [];

    for (const subArr of arr) {
      for (const item of subArr) {
        result.push(item);
      }
    }

    return result;
  }
}
