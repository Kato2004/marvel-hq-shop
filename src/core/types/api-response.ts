export interface IComicData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T;
}
export interface IApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: IComicData<T>;
  etag: string;
}
