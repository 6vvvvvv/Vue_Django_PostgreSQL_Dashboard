<template>
  <div class="barchart">
    <div class="barchart-title"><p>Total View</p></div>
    <div class="barchart-content">
      <div class="barchart-content-data">
        <p>246K</p>
        <p>13.8%</p>
      </div>
      <div class="barchart-content-bar"><BarChartPanel /></div>
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

<style src="@/styles/ComponentCss/BarChart.css"></style>
