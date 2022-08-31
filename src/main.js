import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faAt, faBriefcase, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faLinkedin, faPhone, faHome, faBriefcase, faAddressCard, faAt)

import CountryFlag from 'vue-country-flag'

Vue.component('font-awesome-icon', FontAwesomeIcon, 'vue-country-flag', CountryFlag)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
