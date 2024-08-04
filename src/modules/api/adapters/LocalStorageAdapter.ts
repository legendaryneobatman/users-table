import type { IApiAdapter } from '@/modules/api/interfaces/IApiAdapter'

export class LocalStorageAdapter implements IApiAdapter{
  query<TParams extends object, TData>(url: string, params?: TParams): Promise<TData> {
    return Promise.resolve(JSON.parse(localStorage.getItem(url) as string) as TData)
  }

  mutate<TParams extends object, TData>(url: string, params?: TParams): Promise<TData> {
    return Promise.resolve(localStorage.setItem(url, JSON.stringify(params)) as TData)
  }
}
