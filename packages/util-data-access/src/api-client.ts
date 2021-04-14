// eslint-disable-next-line @typescript-eslint/ban-types
const isPlainObject = (value: unknown): value is object => {
  return (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null &&
    !(value instanceof Function) &&
    !(value instanceof Date)
  );
};

async function client(
  endpoint: string,
  {
    data,
    token,
    ...customConfig
  }: RequestInit & {
    data?: unknown;
    token?: string;
  } = {},
): Promise<any> {
  let config: RequestInit = {
    headers: {},
  };

  if (data) {
    if (
      customConfig.method != null &&
      ['GET', 'HEAD'].includes(customConfig.method)
    ) {
      if (isPlainObject(data)) {
        endpoint = addDataToUrlSearchParams(data);
      }
    } else {
      config.body = JSON.stringify(data);
      (config.headers as any)['Content-Type'] = 'application/json';
    }
  } else if (!customConfig.method) {
    config.method = 'GET';
  }

  if (token) {
    (config.headers as any).Authorization = `Bearer ${token}`;
  }

  config = {
    ...config,
    ...customConfig,
    headers: {
      ...config.headers,
      ...customConfig.headers,
    },
  };

  return window.fetch(endpoint, config);

  // eslint-disable-next-line @typescript-eslint/ban-types
  function addDataToUrlSearchParams(data: object): string {
    const url = new URL(endpoint);

    for (const [name, value] of Object.entries(data)) {
      url.searchParams.append(
        name,
        typeof value === 'string' ? value : JSON.stringify(value),
      );
    }

    return url.toString();
  }
}

export { client };
