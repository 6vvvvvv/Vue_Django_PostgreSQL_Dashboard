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

<style src="@/styles/ViewCss/Calendar.css"></style>
