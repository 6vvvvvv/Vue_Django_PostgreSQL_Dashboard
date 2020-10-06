<template>
  <div class="barchart">
    <div class="barchart-title"><p>Total View</p></div>
    <div class="barchart-content">
      <div class="barchart-content-data">
        <p>246K</p>
        <p>13.8%</p>
      </div>
      <div class="bar"><BarChartPanel /></div>
    </div>
  </div>
</template>

<script>
import BarChartPanel from "./BarChartPanel";
export default {
  name: "Barchart",
  data() {
    return {};
  },
  components: {
    BarChartPanel
  }
};
</script>

<style>
div.barchart {
  position: relative;
  width: 370px;
  height: 133px;
  background-color: white;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
}
div.barchart-title {
  position: absolute;
  width: 100%;
  height: 64px;
  left: 20px;
  top: 20px;
}

div.barchart-content {
  display: flex;
  position: relative;
  width: 100%;
  height: 69px;
}

div.barchart-content-data {
  position: absolute;
  width: 56px;
  height: 50px;
  left: 20px;
  top: 64px;
}

div.bar {
  position: absolute;
  width: 208px;
  left: 238px;
  top: 73px;
}
</style>
