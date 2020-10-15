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
        <a href="#"><img :src="edit" alt="edit"/></a
        ><a href="#"
          ><span><img :src="cancel" alt="cancel"/></span
        ></a>
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

<style src="@/styles/ComponentCss/ContactCard.css"></style>
