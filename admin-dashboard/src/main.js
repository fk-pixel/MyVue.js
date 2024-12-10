import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
import * as VueGoogleMaps from 'vue2-google-maps';
import JsonExcel from "vue-json-excel";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueMdijs from 'vue-mdijs'
import { mdiPhone } from '@mdi/js';
import { mdiLeaf } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';
import { mdiTruckCheck } from '@mdi/js';
import { mdiForklift } from '@mdi/js';
import { mdiShoppingSearch } from '@mdi/js';
import { mdiAccountSupervisorCircle } from '@mdi/js';
import { mdiTableCancel } from '@mdi/js';
import { mdiBasket } from '@mdi/js';
import { mdiCurrencyEur } from '@mdi/js';
import { mdiCashMultiple } from '@mdi/js';
import { mdiPercentOutline } from '@mdi/js';
import { mdiChartAreaspline } from '@mdi/js';
import { mdiCartRemove } from '@mdi/js';
import { mdiAccountBoxMultipleOutline } from '@mdi/js';
import { mdiTimetable } from '@mdi/js';
import { mdiAlphaSBox } from '@mdi/js';
import moment from 'moment';
import VueMoment from 'vue-moment'

/* import VueHtmlToPaper from 'vue-html-to-paper';
Vue.use(VueHtmlToPaper); */
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.component("downloadExcel", JsonExcel);

Vue.use(VueMoment, {
  moment,
});
// Set the Moment locale to Germany
moment.locale('de');

Vue.use(Toast);

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});

Vue.use(VueAxios, axios);

Vue.filter('moment', function(value, format) {
  if (value === null || value === undefined || format === undefined) {
      return '' //moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
  if (format === 'from') {
    return moment(value).fromNow()
  }
  return moment(value).format(format)
});

//Vue.component('mdb-icon', mdbIcon);
VueMdijs.add({ mdiAccountBoxMultipleOutline })
VueMdijs.add({ mdiCartRemove })
VueMdijs.add({ mdiChartAreaspline })
VueMdijs.add({ mdiPercentOutline })
VueMdijs.add({ mdiCashMultiple })
VueMdijs.add({ mdiCurrencyEur })
VueMdijs.add({ mdiBasket})
VueMdijs.add({ mdiLeaf })
VueMdijs.add({ mdiTableCancel })
VueMdijs.add({ mdiPhone })
VueMdijs.add({ mdiBasketFill })
VueMdijs.add({mdiTruckCheck})
VueMdijs.add({ mdiForklift })
VueMdijs.add({mdiShoppingSearch})
VueMdijs.add({mdiAccountSupervisorCircle})
VueMdijs.add({ mdiTimetable })
VueMdijs.add({ mdiAlphaSBox })
Vue.use(VueMdijs)


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
