import type { IUserRepository } from '@/modules/user/interfaces'
import { getApiClient } from '@/modules/api'
import type { IApiAdapter } from '@/modules/api/interfaces'
import type { GetUserDtoResult, GetUsersDtoPayload } from '@/modules/user/dtos/GetUsersDto'
import type { CreateUserDtoPayload } from '@/modules/user/dtos/CreateUserDto'

export class UserRepository implements IUserRepository{
  private api: IApiAdapter

  constructor() {
    this.api = getApiClient()
  }

  async getUsers(filters?: GetUsersDtoPayload): Promise<GetUserDtoResult[]> {
    return this.api.query('users', filters)
  }

  createUser(payload: CreateUserDtoPayload): Promise<void> {
    return this.api.mutate('users', payload)
  }

}
