import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import * as VueGoogleMaps from "vue2-google-maps";
import locale from "element-ui/lib/locale/lang/en";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI, { locale });

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyANWAUiTA0Rw2G6Uxb_dU568QZRAkRvw78",
    libraries: "places",
    installComponents: true
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
