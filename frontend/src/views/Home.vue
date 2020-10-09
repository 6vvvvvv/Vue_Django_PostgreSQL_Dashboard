<template>
  <div id="home">
    <div class="home-side">
      <SideBar />
    </div>
    <div class="home-container"><Cal /></div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    SideBar,

  }
};
</script>

<style>
div#home {
  position: relative;
  width: calc(100% - 325px);
}

div.home-container {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1170px;
  height: 752px;
  background-color: white;
  padding: 40px 20px;
}
</style>
