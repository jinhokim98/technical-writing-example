import BASE_URL from '@constants/baseUrl';

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type Body = ReadableStream | XMLHttpRequestBodyInit;
type HeadersType = [string, string][] | Record<string, string> | Headers;

export type ObjectQueryParams = Record<string, string | number | boolean>;

type RequestProps = {
  baseUrl?: string;
  endpoint: string;
  headers?: HeadersType;
  body?: Body | object | null;
  queryParams?: ObjectQueryParams;
};

type FetcherProps = RequestProps & {
  method: Method;
};

type Options = {
  method: Method;
  headers: HeadersType;
  body?: Body | null;
};

type ErrorHandlerProps = {
  url: string;
  options: Options;
  body: string;
};

const objectToQueryString = (params: ObjectQueryParams): string => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export const requestGet = async <T>({headers = {}, ...args}: RequestProps): Promise<T> => {
  const response = await fetcher({
    ...args,
    method: 'GET',
    headers,
  });

  const data: T = await response!.json();
  return data;
};

export const requestPatch = ({headers = {}, ...args}: RequestProps) => {
  return fetcher({method: 'PATCH', headers, ...args});
};

export const requestPut = ({headers = {}, ...args}: RequestProps) => {
  return fetcher({method: 'PUT', headers, ...args});
};

export const requestPostWithoutResponse = async ({headers = {}, ...args}: RequestProps) => {
  await fetcher({method: 'POST', headers, ...args});
};

export const requestPostWithResponse = async <T>({headers = {}, ...args}: RequestProps): Promise<T> => {
  const response = await fetcher({method: 'POST', headers, ...args});

  const data: T = await response!.json();
  return data;
};

export const requestDelete = ({headers = {}, ...args}: RequestProps) => {
  return fetcher({method: 'DELETE', headers, ...args});
};

const fetcher = ({baseUrl = BASE_URL, method, endpoint, headers, body, queryParams}: FetcherProps) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  let url = `${baseUrl}${endpoint}`;

  if (queryParams) url += `?${objectToQueryString(queryParams)}`;

  return errorHandler({url, options, body: JSON.stringify(body)});
};

const errorHandler = async ({url, options}: ErrorHandlerProps) => {
  try {
    const response: Response = await fetch(url, options);

    if (!response.ok) {
      throw new Error();
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
