<template>
  <button @click="openModal">Open</button>
  <teleport to="body">
    <div v-if="isOpenModal" class="modal-content">
      <p>This is Modal!!!!!</p>
      <p>message: {{ message }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    message: {
      type: String,
    },
  },
  setup() {
    const isOpenModal = ref(false);
    const openModal = () => {
      return (isOpenModal.value = true);
    };
    const closeModal = () => {
      return (isOpenModal.value = false);
    };

    return {
      openModal,
      closeModal,
      isOpenModal,
    };
  },
});
</script>
