<template>
  <div id="customers">
    <div class="customers-side">
      <SideBar />
      <div class="customers-container">CCCCCCCCCCCCCCCCCCCCC</div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";

export default {
  name: "Customers",
  components: {
    SideBar
  }
};
</script>

<style>
#customers {
  position: relative;
}

div.customers-side {
  position: relative;
  width: 66px;
  height: 100%;
}

div.customers-side:hover {
  position: relative;
  width: 260px;
  height: 100%;
}

div.customers-container {
  position: relative;
  top: 70px;
  left: 141px;
  height: 100%;
}

div.customers-side:hover div.customers-container {
  position: relative;
  top: 70px;
  left: 335px;
  height: 100%;
}
</style>
