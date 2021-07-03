// eslint-disable-next-line @typescript-eslint/ban-types
const isPlainObject = (value: unknown): value is object => {
  return (
    typeof value === "object" &&
    !Array.isArray(value) &&
    value !== null &&
    !(value instanceof Function) &&
    !(value instanceof Date)
  );
};

async function client(
  url: string,
  {
    data,
    token,
    ...customConfig
  }: RequestInit & {
    data?: unknown;
    token?: string;
  } = {}
): Promise<any> {
  let config: RequestInit = {
    headers: {},
  };

  if (data) {
    if (
      customConfig.method != null &&
      ["GET", "HEAD"].includes(customConfig.method)
    ) {
      if (isPlainObject(data)) {
        url = addDataToUrlSearchParams(data);
      }
    } else {
      config.body = JSON.stringify(data);
      (config.headers as any)["Content-Type"] = "application/json";
      config.method = "POST";
    }
  } else if (!customConfig.method) {
    config.method = "GET";
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

  return window.fetch(url, config);

  // eslint-disable-next-line @typescript-eslint/ban-types
  function addDataToUrlSearchParams(data: object): string {
    const newUrl = new URL(url);

    for (const [name, value] of Object.entries(data)) {
      newUrl.searchParams.append(
        name,
        typeof value === "string" ? value : JSON.stringify(value)
      );
    }

    return newUrl.toString();
  }
}

export { client };
