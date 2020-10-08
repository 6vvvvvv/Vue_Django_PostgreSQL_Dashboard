<template>
  <div class="q-pa-md row justify-center ">
    <div style="width: 100%; max-width: 650px">
      <q-chat-message name="me" :text="['hey, how are you?']" sent />
      <q-chat-message name="David James" :text="['doing fine, how r you?']" />
    </div>
  </div>
</template>

<script>
import { QChatMessage } from "quasar";
export default {
  components: {
    QChatMessage
  }
};
</script>

<style></style>
