import type { IUser } from '@/modules/user/interfaces/IUser'
import type { GetUserDtoResult } from '@/modules/user/dtos/GetUsersDto'

export class UserMapper {
  static toUser(fetchUser: GetUserDtoResult): IUser {
    const [firstName, lastName] = fetchUser.name.split(' ')
    return {
      id: fetchUser.id,
      firstName: firstName,
      lastName: lastName,
      phone: fetchUser.tel,
      parent: fetchUser.parentId,
    }
  }

  static toUserList(fetchUserList: GetUserDtoResult[]) {
    return fetchUserList.map(user => this.toUser(user))
  }
}
