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

<style lang="css">
div > .reset {
  display: flex;
}
div > .reset-img {
  width: 50%;
  height: 969px;
}

div > .reset-form {
  width: 50%;
  height: 969px;
}

div.reset-img > img {
  width: 100%;
  height: 100%;
}

div.reset-form-logo {
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

div.reset-form-resend {
  width: 402px;
  height: 25px;
  margin: 8px auto auto;
  font-family: Source Sans Pro;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #4d4f5c;
  opacity: 0.5;
}

div.reset-form-input {
  width: 400px;
  height: 45px;
  margin: 40px auto auto;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #43425d;
}

div.reset-form-btn {
  position: relative;
  width: 400px;
  margin: 42px auto auto;
}

div.reset-form-btn button:nth-child(1) {
  width: 229px;
  height: 50px;
  margin: 42px 83px;
  padding: auto;
  text-align: center;
  background-color: #43425d;
  border-radius: 4px;
  border: solid 1px #43425d;
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #ffffff;
}

div.reset-form-footer {
  position: absolute;
  width: 122px;
  height: 15px;
  bottom: 19px;
  right: 25%;
  margin-right: -61px;
}

div.reset-form-footer > p {
  font-family: Source Sans Pro;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 13px;
  letter-spacing: 0px;
  color: #43425d;
}
</style>
