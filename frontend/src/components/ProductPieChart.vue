<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ["Total Spent", "Money Saved"],
        datasets: [
          {
            borderWidth: 1,
            borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)"],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            data: [18570, 31340]
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style></style>
