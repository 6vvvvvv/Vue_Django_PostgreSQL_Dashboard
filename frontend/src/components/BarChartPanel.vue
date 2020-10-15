<template>
  <div id="app">
    <v-chart class="my-chart" :options="bar" />
  </div>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/bar";
export default {
  name: "App",
  components: {
    "v-chart": ECharts
  },
  data: function() {
    return {
      bar: {
        grid: { show: false },

        tooltip: {},
        xAxis: {
          data: ["Jan", "Feb", "Mar", "Apr", "May"]
        },
        yAxis: {},

        series: [
          {
            name: "sale",
            type: "bar",
            data: [10, 20, 36, 10, 10]
          }
        ]
      }
    };
  }
};
</script>

<style src="@/styles/ComponentCss/BarChartPanel.css"></style>
