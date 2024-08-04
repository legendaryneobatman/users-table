<script lang="ts">
import { defineComponent } from 'vue'
import { UiDialog } from '#/ui-kit'

export default defineComponent({
  name: 'CreateAction',
  components: { UiDialog },
  data () {
    return {
      show: false,
    }
  },
})
</script>

<template>
  <UiDialog v-model="show" @close="console.log($event)">
    <UsersForm />
  </UiDialog>
</template>

<style scoped></style>
