<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiButton'
})
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  padding: 15px;
  background: none;
  border: thin solid rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #f1f1f1;
    transform: scale(0.95);
  }
}
</style>
