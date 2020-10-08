<template>
  <div id="contact">
    <div class="contact-info row">
      <div class="contact-avartar col-1">
        <img
          :src="require(`@/assets/customers/${personavatar}`)"
          alt="avatar"
        />
      </div>
      <div class="contact-detail col-6">
        <p>{{ personname }}</p>
        <p>United States</p>
        <p>Mobile : 871.567.4877</p>
      </div>
      <div class="edit-cancel">
        <a href="#"><img :src="edit" alt="edit" /></a><a href="#"><span
          ><img :src="cancel" alt="cancel"
        /></span></a>
      </div>
    </div>
    <div class="social">
      <ul class="social-list">
        <li class="social-item">
          <a href="#"><img :src="ig" alt="ig"/></a>
        </li>
        <li class="social-item">
          <a href="#"><img :src="twitter" alt="twitter"/></a>
        </li>
        <li class="social-item">
          <a href="#"><img :src="fb" alt="fb"/></a>
        </li>
        <li class="social-item">
          <a href="#"><img :src="mail" alt="mail"/></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: require("../assets/customers/edit.png"),
      cancel: require("../assets/customers/close.png"),
      ig: require("../assets/customers/Path 40.png"),
      twitter: require("../assets/customers/Path 39.png"),
      fb: require("../assets/customers/Path 38.png"),
      mail: require("../assets/customers/Path 316.png")
    };
  },
  props: ["personavatar", "personname"]
};
</script>

<style>
div#contact {
  position: relative;
  width: 500px;
  height: 165px;
  margin-bottom: 15px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
}

div.contact-info {
  position: relative;
  width: 100%;
  height: 120px;
  border-bottom: solid 1px #f1f1f3;
}

div.contact-avartar {
  position: relative;
  margin-top: 24px;
  margin-left: 24px;
}

div.contact-detail {
  margin-left: 60px;
  margin-top: 26px;
}

div.contact-detail p:nth-child(1) {
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 7px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

div.contact-detail p:not(:nth-child(1)) {
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #43425d;
  opacity: 0.5;
}

div.edit-cancel {
  position: absolute;
  right: 40px;
  top: 30px;
}

div.edit-cancel span {
  display: inline-block;
  margin-left: 20px;
}

div.social {
  position: relative;
}

ul.social-list {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li.social-item {
  margin-top: 11px;
}

li.social-item:first-child {
  margin-left: 125px;
}

li.social-item:not(:first-child) {
  margin-left: 40px;
}
</style>
