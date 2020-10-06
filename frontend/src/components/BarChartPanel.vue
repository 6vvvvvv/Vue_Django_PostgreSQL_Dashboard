<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChartPanel",
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            // label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontSize: 1
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false
              }
            }
          ]
        },
        tooltips: {
          titleFontSize: 80,
          bodyFontSize: 80,
          titleFontFamily: "Arial",
          bodyFontFamily: "Arial",
          xPadding: 30,
          yPadding: 30,
          position: "average"
        }
      }
    );
  }
};
</script>

<style>
canvas#bar-chart {
  width: 112px;
  height: 39px;
}
</style>
