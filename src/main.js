import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
/*import Embed from 'v-video-embed';*/
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed);
/*Vue.use(Embed);*/
Vue.use(axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
