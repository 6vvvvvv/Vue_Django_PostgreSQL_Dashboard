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
          ><a href="#">Already have an account?Sign in.</a></span
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

<style lang="css">
div > .signup {
  display: flex;
}
div > .signup-img {
  width: 50%;
  height: 969px;
}

div > .signup-form {
  width: 50%;
  height: 969px;
}

div.signup-img > img {
  width: 100%;
  height: 100%;
}

div.signup-form-logo {
  margin: 118px auto auto;
  width: 234px;
  height: 50px;
  font-family: Source Sans Pro;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 7px;
  color: #43425d;
}

div.signup-form-complete {
  margin: 8px auto auto;
  width: 298px;
  height: 25px;
  font-family: Source Sans Pro;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
  opacity: 0.5;
}

div.signup-form-first-last-name {
  width: 400px;
  height: 30px;
  margin: auto;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}

div.span-firstname {
  display: inline-block;
  width: 175px;
}

div.span-lastname {
  display: inline-block;
  width: 175px;
  margin-left: 45px;
}

div.signup-form-username {
  width: 400px;
  margin: 48px auto auto;
}

div.signup-form-email {
  width: 400px;
  margin: 40px auto auto;
}

div.signup-form-password {
  width: 400px;
  margin: 46px auto auto;
}

div.signup-form-confirm-password {
  width: 400px;
  margin: 46px auto auto;
}

div.signup-form-checkbox {
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

div.signup-form-btn {
  width: 400px;
  margin: 47px auto auto;
}

div.signup-form-btn button {
  width: 185px;
  height: 50px;
  margin: auto 105px;
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

div.signup-form-redirect {
  width: 208px;
  height: 21px;
  margin: 40px auto auto;
}

div.signup-form-redirect > span.redirect-link > a {
  font-family: Source Sans Pro;
  text-decoration: underline;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}

div.signup-form-redirect > span.redirect-link > a:hover {
  color: orange;
}

div.signup-form-footer {
  position: absolute;
  width: 122px;
  height: 15px;
  bottom: 19px;
  right: 25%;
  margin-right: -61px;
}

div.signup-form-footer > p {
  font-family: Source Sans Pro;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #43425d;
}
</style>
