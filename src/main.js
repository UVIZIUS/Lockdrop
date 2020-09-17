/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';
import Vuex from 'vuex';
import 'es6-promise/auto'

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(Argon);

const store = new Vuex.Store({
  state: {
    accounts: [],
    account: null,
    balance: "0.0",

  },
  mutations: {
    setBalance(state, bal) {
      state.balance = bal
    }
  },
  getters: {
    Balance: state => {
      return state.balance
    },
    displayBalance: state => {
        let bal = state.balance
        let deci = -1

        if(!bal)
            return "0.0"
        deci = bal.toString().indexOf('.')
        if(deci  == -1 )
            return bal
        deci = Math.min(bal.length, deci+3)
        return bal.substr(0, deci+1)
    },
  }  
});

new Vue({
  store,  
  router,
  render: h => h(App)
}).$mount("#app");
