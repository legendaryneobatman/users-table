export interface IApiAdapter {
  query<TParams extends Record<string, string>, TData>(url: string, params?: TParams): Promise<TData>
  mutate<TParams extends object, TData>(url: string, params?: TParams): Promise<TData>
}
