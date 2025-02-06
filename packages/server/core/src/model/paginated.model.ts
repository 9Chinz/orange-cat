export type Paginated<T> = {
  total: number;
  from: number;
  to: number;
  currentPage: number;
  lastPage: number;
  perPage: number;
  data: T[];
}

export type PaginateOptions = {
  page: number;
  limit: number;
}
