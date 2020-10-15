<template>
  <div class="signup">
    <div class="signup-img">
      <img v-bind:src="image" alt="bg-image" />
    </div>

    <div class="signup-form ">
      <div class="signup-form-logo">
        <p>IMPEKABLE</p>
      </div>
      <div class="signup-form-complete">
        <p>Please complete to create your account.</p>
      </div>

      <div class="signup-form-first-last-name">
        <div class="span-firstname">
          <q-input v-model="firstname" label="First name"></q-input>
        </div>
        <div class="span-lastname">
          <q-input v-model="lastname" label="Last name"></q-input>
        </div>
      </div>

      <div class="signup-form-username">
        <q-input v-model="username" label="Username"></q-input>
      </div>

      <div class="signup-form-email">
        <q-input v-model="email" label="Email"></q-input>
      </div>

      <div class="signup-form-password">
        <q-input v-model="password" label="Password"></q-input>
      </div>

      <div class="signup-form-confirm-password">
        <q-input v-model="confirmpassword" label="Confirm Password"></q-input>
      </div>

      <div class="signup-form-checkbox">
        <label class="container"
          >I agree with terms and conditions
          <input type="checkbox" checked="checked" />
        </label>
      </div>

      <div class="signup-form-btn">
        <button type="submit">Sign up</button>
      </div>

      <div class="signup-form-redirect">
        <span class="redirect-link"
          ><a href=/login>Already have an account?Sign in.</a></span
        >
      </div>

      <div class="signup-form-footer"><p>Term of use. Privacy policy</p></div>
    </div>
  </div>
</template>

<script>
import { QInput } from "quasar";
export default {
  data() {
    return {
      image: require("../assets/authentication/Component 212 – 1.png"),
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  },
  components: {
    QInput
  }
};
</script>

<style src="@/styles/ViewCss/Signup.css">
</style>
