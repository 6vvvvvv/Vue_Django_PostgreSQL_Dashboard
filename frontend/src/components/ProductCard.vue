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

<style src="@/styles/ComponentCss/ProductCard.css"></style>
