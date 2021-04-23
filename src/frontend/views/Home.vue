<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Modal message="message" />
    <Input @send="emitSend" />
  </div>
</template>

<script lang="ts">
//import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Modal from '@/components/Modal.vue';
import Input from '@/components/Input.vue';
import { defineComponent,ref } from "vue";

/* @Options({
  components: {
    HelloWorld,
    Modal,
    Input,
  },
}) */
export default defineComponent({
  name: "Home", 
  components: {
    Input,
    Modal,
    HelloWorld,
  },
  setup() {
    const message = ref("");
    const emitSend = (value: string) => {
      message.value = value;
    };
    return {
      emitSend,
      message
    };
  }
});
</script>
