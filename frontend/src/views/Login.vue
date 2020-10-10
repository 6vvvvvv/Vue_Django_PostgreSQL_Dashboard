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

<style lang="css">
div > .login {
  display: flex;
}
div > .login-img {
  width: 50%;
  height: 969px;
}

div > .login-form {
  width: 50%;
  height: 969px;
}

div.login-img > img {
  width: 100%;
  height: 100%;
}

div.login-form-logo {
  width: 234px;
  height: 50px;
  margin: 234px auto auto;
  font-family: Source Sans Pro;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 7px;
  color: #43425d;
}

div.login-form-welcome {
  width: 334px;
  height: 25px;
  margin: 8px auto auto;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
  opacity: 0.5;
}

div.login-form-input {
  width: 400px;
  height: 114px;
  margin: auto;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}

div.login-form-checkbox {
  width: 400px;
  margin: auto;
}

label.container {
  position: relative;
  display: block;
  width: 100%;
  height: 21px;
  padding-left: 33px;
  margin-top: 46px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #43425d;
}

label.container > input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #808495;
}

label.container > span.forget-me-link {
  float: right;
}

label.container > span.forget-me-link > a {
  text-decoration: none;
}

label.container > span.forget-me-link > a:hover {
  color: orange;
}

div.login-form-btn {
  width: 400px;
  margin: 63px auto auto;
}

div.login-form-btn button:nth-child(1) {
  width: 185px;
  height: 50px;
  text-align: center;
  background-color: #43425d;
  border-radius: 4px;
  border: solid 1px #43425d;
  cursor: pointer;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #ffffff;
}

div.login-form-btn button:nth-child(2) {
  width: 185px;
  height: 50px;
  margin-left: 30px;
  text-align: center;
  background-color: white;
  border-radius: 4px;
  border: solid 1px #43425d;
  cursor: pointer;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.login-form-footer {
  position: absolute;
  width: 122px;
  height: 15px;
  bottom: 19px;
  right: 25%;
  margin-right: -61px;
}

div.login-form-footer > p {
  font-family: Source Sans Pro;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #43425d;
}
</style>
