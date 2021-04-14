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
  const mockResult = { mockValue: 'VALUE' };

  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult));
    }),
  );

  // Act
  const result = await client(`${apiURL}/${endpoint}`);

  // Assert
  expect(result.ok).toBe(true);
  expect(await result.json()).toEqual(mockResult);
});
