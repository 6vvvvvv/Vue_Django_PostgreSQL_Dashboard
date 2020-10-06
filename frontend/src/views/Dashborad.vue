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
        <div class="row linechart-container"><LineChart /></div>
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

export default {
  name: "Dashboard",
  data: () => ({}),
  components: {
    SideBar,
    BarChart,
    LineChart,
    Map,
    Table,
    SearchBar
  }
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
  /* left: 325px; */
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
