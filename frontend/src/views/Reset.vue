<template>
  <div class="reset">
    <div class="reset-img">
      <img v-bind:src="image" alt="bg-image" />
    </div>

    <div class="reset-form ">
      <div class="reset-form-logo">
        <p>IMPEKABLE</p>
      </div>
      <div class="reset-form-resend">
        <p>Enter your email and we send you a password reset link.</p>
      </div>

      <div class="reset-form-input">
        <q-input v-model="email" label="Email"></q-input>
      </div>

      <div class="reset-form-btn">
        <button type="submit">Send request</button>
      </div>

      <div class="reset-form-footer"><p>Term of use. Privacy policy</p></div>
    </div>
  </div>
</template>

<script>
import { QInput } from "quasar";

export default {
  data() {
    return {
      image: require("../assets/authentication/Component 212 – 1.png"),
      email: ""
    };
  },
  components: {
    QInput
  }
};
</script>

<style src="@/styles/ViewCss/Reset.css"></style>
