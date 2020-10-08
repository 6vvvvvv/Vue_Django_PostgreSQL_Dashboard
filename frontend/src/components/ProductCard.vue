<template>
  <div class="product-card">
    <!-- <img :src="require(`@/assets/product/${icon}`)" alt=""> -->
    <img
      class="icon"
      :src="require(`@/assets/product/${icon}.png`)"
      alt="icon"
    />
    <div class="product-card-amout">
      <p>${{ num }}</p>
      <p>{{ desc }}</p>
    </div>
    <a href="#"> <img class="ellipsis" :src="ellipsis" alt="ellipsis"/></a>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      ellipsis: require("../assets/product/menu-icon.png")
    };
  },
  props: ["icon", "num", "desc"],
  components: {}
};
</script>

<style>
div.product-card {
  position: relative;
  width: 370px;
  height: 85px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
}

img.icon {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}

div.product-card-amout {
  position: relative;
  left: 20px;
  top: 25px;
}

div.product-card-amout p:first-child {
  font-family: Source Sans Pro;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0px;
  letter-spacing: 0px;
  color: #56d9fe;
}

div.product-card-amout p:nth-child(2) {
  font-family: Source Sans Pro;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #4d4f5c;
}

img.ellipsis {
  position: absolute;
  right: 20px;
  top: 40px;
}
</style>
