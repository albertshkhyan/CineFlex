export interface RequestError {
  status: number;
  data: {
    error: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

export enum RequestErrorKey {
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  INVALID_TOKEN = 'INVALID_TOKEN',
  UNAUTHORIZED = 'UNAUTHORIZED',
}
