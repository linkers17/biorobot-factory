import { createStore } from 'vuex';
import * as billfold from '@/store/modules/billfold';
import * as stock from '@/store/modules/stock';
import * as production from '@/store/modules/production';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    billfold,
    stock,
    production
  }
})
