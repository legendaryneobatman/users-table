import type { GetUserDtoResult, GetUsersDtoPayload } from '@/modules/user/dtos/GetUsersDto'
import type { CreateUserDtoPayload, CreateUserDtoResult } from '@/modules/user/dtos/CreateUserDto'

export interface IUserRepository {
  getUsers(filters: GetUsersDtoPayload): Promise<GetUserDtoResult[]>;
  createUser(user: CreateUserDtoPayload): Promise<CreateUserDtoResult>;
}
