<script lang="ts">
import { defineComponent } from 'vue'
import TableAction from '@/modules/user/actions/TableAction.vue'
import { UiButton } from '@/modules/ui-kit'
import { CreateAction } from '#/user'

export default defineComponent({
  name: 'IndexPage',
  components: { CreateAction, UiButton, TableAction },
})
</script>

<template>
  <div>
    <header>
      <UiButton>Создать пользователя</UiButton>
    </header>
    <TableAction />
    <CreateAction />
  </div>
</template>

<style scoped></style>
