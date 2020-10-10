<template>
  <div id="home">
    <div class="home-side">
      <SideBar />
    </div>
    <div class="home-container">
      <h5>README</h5>
      <p>1. This project is base on file "xd-resources-dashboard-ui".</p>
      <p>
        2. Some pages for example settings, help center can not be realised due
        to absence of UI.
      </p>
      <p>
        3. Here is the entry of
        <a href="signup"> <span style="font-weight:bold">Signup page</span></a>
        |
        <a href="/login"><span style="font-weight:bold"> Login page</span></a> |
        <a href="/reset"><span style="font-weight:bold">Reset page</span></a>
        They may be associated with authentication use in the future but here
        are only for show use.
      </p>
      <p>
        4. API entry is only available in page Dashboard for the parts of line
        chart and google map (Barchart , google map and Table only for show use
        in response to UI, so don't bother with the graph because they are
        static and abide by their default values).
      </p>
      <p>
        5. This API is related to the weather forcast(I have no idea what should
        I make so I prefer a handy one in this place). Il will by default
        initialize and show the local datas depending on your actual
        location.But you can also search the place you want and have the datas
        showed accordingly in line chart in page Dashboard, which means that it
        is dynamic. You are feel free to test it by yourself.
      </p>

      6.For consulting the code please check
      <a href="https://github.com/6vvvvvv/Vue_Vuex_Dashboard"
        ><span style="font-weight:bold">Here</span>
      </a>
      and I have deployed it on google host,
      <a href="#"><span style="font-weight:bold">Please check here</span></a>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    SideBar
  }
};
</script>

<style>
div#home {
  position: relative;
  width: calc(100% - 325px);
}

div.home-container {
  position: relative;
  top: 70px;
  left: 400px;
  width: 1170px;
  height: 752px;
  background-color: white;
  padding: 40px 20px;
}
</style>
