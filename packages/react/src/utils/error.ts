import { AxiosError } from 'axios';

type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export type HTTPRequestMethod = RequestMethod | Lowercase<RequestMethod>;

interface CommonErrorConstructorArg {
  message: string;
}

interface HTTPErrorConstructorArg extends CommonErrorConstructorArg {
  status: number;
  method: HTTPRequestMethod;
}

export class CommonError extends Error {
  constructor(errorObject: CommonErrorConstructorArg) {
    super(errorObject.message);
    this.name = this.constructor.name;
  }
}

export class HTTPError extends Error {
  status: number;
  method: HTTPRequestMethod;
  constructor(errorObject: HTTPErrorConstructorArg) {
    super(errorObject.message);
    this.status = errorObject.status || 500;
    this.method = errorObject.method;
    this.name = this.constructor.name;
  }
}

export const createError = (e: unknown, message?: string) => {
  if (e instanceof AxiosError && e.response?.status && e.config?.method) {
    // Method, status 정보가 없는 경우 common error로 처리
    return new HTTPError({
      message: message || e.message,
      status: e.response.status,
      method: e.config.method as HTTPRequestMethod,
    });
  }

  return new CommonError({ message: message || (e as Error).message });
};
