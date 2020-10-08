<template>
  <div id="app">
    <v-chart class="product-bar" :options="bar" />
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
        color: "#A3A1FB",
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(161, 251, 167, 0.8)"
            }
          }
        ]
      }
    };
  }
};
</script>

<style>

</style>
