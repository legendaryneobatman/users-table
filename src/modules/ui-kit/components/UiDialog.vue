<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      dialog: null,
    }
  },
})
</script>

<template>
  <dialog ref="dialog" :open="modelValue" class="dialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
    <form method="dialog" class="dialog__backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped>
.dialog {
  position: fixed;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: transparent;
}

.dialog__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: 0;
  border: thin solid rgba(0, 0, 0, 0.12);
  padding: 15px;
  background-color: white;
  z-index: 100;
}

.dialog__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);

  & button {
    width: 100%;
    height: 100%;
    background: transparent;
  }
}
</style>
