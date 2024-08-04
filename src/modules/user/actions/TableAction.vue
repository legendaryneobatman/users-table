<script lang="ts">
import { defineComponent } from 'vue'
import UserTable from '../components/UserTable.vue'
import { UserRepository } from '../repositories/UserRepository'
import type { IUser } from '../interfaces'
import { UserMapper } from '../mappers/UserMapper'

export default defineComponent({
  name: 'TableAction',
  components: { UserTable },
  data() {
    return {
      users: [] as IUser[],
      userRepository: new UserRepository(),
    }
  },
  async mounted() {
      this.users = await this.getUsers()
  },
  computed: {
    mappedUsers () {
      return this.users.map(({ firstName, lastName, phone }) => ({
        firstName,
        lastName,
        phone
      }))
    }
  },
  methods: {
    async getUsers () {
      const data = await this.userRepository.getUsers();
      return UserMapper.toUserList(data)
    },
  }
})
</script>

<template>
  <div>
    <UserTable :users="mappedUsers"/>
  </div>
</template>

<style scoped>

</style>
