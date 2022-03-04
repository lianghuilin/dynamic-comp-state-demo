import Vue from 'vue';
import Vuex from 'vuex';

import realtimeCity from './modules/realtimeCity';
import threshold from './modules/threshold';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    realtimeCity,
    threshold,
  },
});
