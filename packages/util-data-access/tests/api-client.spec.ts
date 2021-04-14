import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { client } from '../src';
import 'whatwg-fetch';

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('calls fetch at the endpoint with method GET by default', async () => {
  // Arrange
  const endpoint = 'test-endpoint';
  const apiURL = 'https://test-api-url.ru';
  const url = `${apiURL}/${endpoint}`;

  const mockResult = { mockValue: 'VALUE' };

  server.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.json(mockResult));
    }),
  );

  // Act
  const result = await client(url);

  // Assert
  expect(result.ok).toBe(true);
  expect(await result.json()).toEqual(mockResult);
});

test(`adds auth token when a token is provided`, async () => {
  // Arrange
  const token = 'FAKE_TOKEN';

  const apiURL = 'https://test-api-url.ru';
  const endpoint = 'test-endpoint';
  const url = `${apiURL}/${endpoint}`;

  const mockResult = { mockValue: 'VALUE' };

  let request;
  server.use(
    rest.get(url, async (req, res, ctx) => {
      request = req;
      return res(ctx.json(mockResult));
    }),
  );

  // Act
  await client(url, { token });

  // Assert
  expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`);
});

test(`allows for config overrides`, async () => {
  // Arrange
  const endpoint = 'test-endpoint';
  const apiURL = 'https://test-api-url.ru';
  const url = `${apiURL}/${endpoint}`;

  const mockResult = { mockValue: 'VALUE' };

  let request;
  server.use(
    rest.get(url, async (req, res, ctx) => {
      request = req;
      return res(ctx.json(mockResult));
    }),
  );

  const customConfig = {
    mode: 'cors' as const,
    headers: { 'Content-Type': 'fake-type' },
  };

  // Act
  await client(url, customConfig);

  // Arrange
  expect(request.mode).toBe(customConfig.mode);
  expect(request.headers.get('Content-Type')).toBe(
    customConfig.headers['Content-Type'],
  );
});

test(`when data is provided, but not method, it is stringified and the method defaults to POST`, async () => {
  // Arrange
  const endpoint = 'test-endpoint';
  const apiURL = 'https://test-api-url.ru';
  const url = `${apiURL}/${endpoint}`;

  server.use(
    rest.post(url, async (req, res, ctx) => {
      return res(ctx.json(req.body));
    }),
  );

  const data = { a: 'b' };

  // Act
  const result = await client(url, { data });

  // Assert
  expect(await result.json()).toEqual(data);
});
