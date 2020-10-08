<template>
  <div id="calendar">
    <div class="calendar-side">
      <SideBar />
    </div>
    <div class="calendar-container"><Cal /></div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import Cal from "../components/Cal";

export default {
  name: "Calendar",
  data: () => ({}),
  components: {
    SideBar,
    Cal
  }
};
</script>

<style>
div#calendar {
  position: relative;
  width: calc(100% - 325px);
}

div.calendar-container {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1170px;
  height: 752px;
  background-color: white;
  padding: 40px 20px;
}
</style>
