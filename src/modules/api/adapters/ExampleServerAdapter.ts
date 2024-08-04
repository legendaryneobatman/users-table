import type { IApiAdapter } from '@/modules/api/interfaces/IApiAdapter'

export class ExampleServerAdapter implements IApiAdapter {
  async query<TParams extends Record<string, string>, TData>(url: string, params?: TParams): Promise<TData> {
    const _url = new URL(url);
    if (params) {
      _url.search =  new URLSearchParams(params).toString()
    }
    const response = await fetch(_url)
    const data = await response.json();
    return data as TData
  }

  async mutate<TParams extends object, TData>(url: string, params?: TParams): Promise<TData> {
    const response = await fetch(url, {body: JSON.stringify(params), method: 'POST'})
    const data = await response.json()

    return data as TData
  }

}
