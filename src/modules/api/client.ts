import type { IApiAdapter } from '@/modules/api/interfaces/IApiAdapter'
import { LocalStorageAdapter } from '@/modules/api/adapters/LocalStorageAdapter'

export const getApiClient = (): IApiAdapter => {
  return new LocalStorageAdapter()
}
