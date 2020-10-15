<template>
  <div id="dashboard">
    <div class="dashboard-side">
      <SideBar />
    </div>
    <div class="dashboard-container">
      <div class=" searchbar"><SearchBar /></div>

      <div class=" barchart-container">
        <div class="barchart-1"><BarChart /></div>
        <div class="barchart-2"><BarChart /></div>
        <div class="barchart-3"><BarChart /></div>
      </div>
    </div>

    <div v-if="this.bodytemp.length" class=" linechart-container">
      <div><p class="real-time">Real Time Temperature</p></div>
      <LineChart
        v-bind:lablefromparent="lable"
        v-bind:actualfromparent="actual"
        v-bind:bodytempfromparent="bodytemp"
        v-bind:key="location"
      />
    </div>

    <div class="linechart-detail-map">
      <div class="linechart-detail">
        <Table />
      </div>
      <div class="linechart-map"><Map /></div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import Map from "../components/Map";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  data: () => ({
    didSearch: false,
    location: "",
    trend3h: [],
    lable: [],
    actual: [],
    bodytemp: []
  }),
  components: {
    SideBar,
    BarChart,
    LineChart,
    Map,
    Table,
    SearchBar
  },

  computed: mapState({
    searchPlaceTrend3h: state => state.trend3h,
    searchPlace: state => state.inputresult
  }),

  watch: {
    searchPlaceTrend3h() {
      const newTrend3hList = this.searchPlaceTrend3h;

      this.location = this.searchPlace;

      this.lable = newTrend3hList.map(item => {
        return item.dt_txt;
      });

      this.actual = newTrend3hList.map(item => {
        return (item.main.temp - 273.15).toFixed(1);
      });

      this.bodytemp = newTrend3hList.map(item => {
        return (item.main.feels_like - 273.15).toFixed(1);
      });
    }
  },

  created() {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        console.log("fromapi-----", response.data);
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${response.data.city}&appid=34e35ced0edac102f995450c1b6d4bae`
          )
          .then(response1 => {
            console.log("fromapi******", response1.data);

            this.location = response.data.city;

            this.trend3h = response1.data.list.slice(1, 8);

            this.lable = response1.data.list.slice(1, 8).map(item => {
              return item.dt_txt;
            });

            this.actual = response1.data.list.slice(1, 8).map(item => {
              return (item.main.temp - 273.15).toFixed(1);
            });

            this.bodytemp = response1.data.list.slice(1, 8).map(item => {
              return (item.main.feels_like - 273.15).toFixed(1);
            });
          })
          .catch(err => console.log(err));
      })
      .catch(error => {
        console.error(error);
        alert("Error occurred");
      });
  },

  methods: {}
};
</script>

<style src="@/styles/ViewCss/Dashboard.css"></style>
