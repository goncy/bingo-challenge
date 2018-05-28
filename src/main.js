import Vue from "vue";

import Dashboard from "./Dashboard";

import "./index.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Dashboard),
}).$mount("#app");
