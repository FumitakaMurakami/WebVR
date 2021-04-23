<template>
  <div class="input-content">
    <input v-model="message" type="text" />
    <button @click="sendText">emit</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Input",
  emits: {
    send(message: string) {
      return message.length > 4
    }
  },
  setup(props, { emit }) {
    const message = ref('');
    const sendText = () => {
      emit("send", message.value);
    };

    return {
      sendText,
      message
    };
  }
});
</script>