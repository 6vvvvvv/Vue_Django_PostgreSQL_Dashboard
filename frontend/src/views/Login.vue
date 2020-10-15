<template>
  <div class="login">
    <div class="login-img">
      <img v-bind:src="image" alt="bg-image" />
    </div>

    <div class="login-form ">
      <div class="login-form-logo">
        <p>IMPEKABLE</p>
      </div>
      <div class="login-form-welcome">
        <p>Welcome back! Please login to your account.</p>
      </div>

      <div class="login-form-input">
        <q-input v-model="username" label="Username"></q-input>
        <q-input v-model="password" label="Password"></q-input>
      </div>

      <div class="login-form-checkbox">
        <label class="container"
          >Remember me
          <input type="checkbox" checked="checked" />
          <span class="forget-me-link"
            ><a href="/reset">Forget Password</a></span
          >
        </label>
      </div>
      <div class="login-form-btn">
        <button type="submit">Login</button>
        <button type="submit" v-on:click="redirect">Sign up</button>
      </div>

      <div class="login-form-footer"><p>Term of use. Privacy policy</p></div>
    </div>
  </div>
</template>

<script>
import { QInput } from "quasar";
export default {
  data() {
    return {
      image: require("../assets/authentication/Component 212 – 1.png"),
      username: "",
      password: ""
    };
  },
  components: {
    QInput
  },
  methods: {
    redirect: function() {
      window.location.href = "/signup";
    }
  }
};
</script>

<style src="@/styles/ViewCss/Login.css"></style>
