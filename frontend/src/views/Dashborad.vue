<template>
  <div id="dashboard">
    <div class="dashboard-side">
      <SideBar />
      <div class="dashboard-container">
        <div class="row searchbar"><SearchBar /></div>

        <div class="row barchart-container">
          <ul class="barchart-list">
            <li><BarChart /></li>
            <li><BarChart /></li>
            <li><BarChart /></li>
          </ul>
        </div>
        <div v-if="this.bodytemp.length" class="row linechart-container">
          <div><p class="real-time">Real Time Temperature</p></div>
          <LineChart
            v-bind:lablefromparent="lable"
            v-bind:actualfromparent="actual"
            v-bind:bodytempfromparent="bodytemp"
            v-bind:key="location"
          />
        </div>
        <div class="row linechart-detail-map">
          <div class="linechart-detail">
            <div class="linechart-detail-title"></div>
            <div class="linechart-detail-table"><Table /></div>
          </div>
          <div class="linechart-map"><Map /></div>
        </div>
      </div>
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

<style>
div#dashboard {
  position: relative;
  width: calc(100% - 325px);
}

div.dashboard-side {
  position: relative;
}

div.dashboard-container {
  position: relative;
  top: 70px;
  left: 225px;
}

ul.barchart-list {
  list-style-type: none;
}

ul.barchart-list li {
  display: inline-block;
}

ul.barchart-list li:first-child {
  margin-left: 40px;
}

ul.barchart-list li:not(first-child) {
  margin-left: 155px;
}

div.linechart-container {
  width: 1420px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  margin-left: 80px;
  margin-top: 20px;
  padding: 97px 125px 57px;
}

p.real-time {
  font-size: 20px;
}

span.bc2 span.bc3 {
  padding-left: 30px;
}

div.linechart-detail {
  width: 905px;
  height: 479px;
  margin-left: 80px;
  margin-top: 37px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
}

div.linechart-detail-table {
  margin-top: 30px;
}

div.linechart-map {
  width: 490px;
  height: 479px;
  margin-left: 30px;
  margin-top: 37px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
}

ul.linechart-detail-list {
  list-style-type: none;
}

div.searchbar {
  margin-left: 80px;
  margin-bottom: 40px;
  width: 1420px;
}
</style>
