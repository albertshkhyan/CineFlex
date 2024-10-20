export type ID = string | number;

export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  message?: string;
}

export interface Pagination<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}
