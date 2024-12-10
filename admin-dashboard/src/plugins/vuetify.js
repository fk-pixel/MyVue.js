import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import config from '@/config'
import 'font-awesome/css/font-awesome.css'
import ebayIcon from '@/components/EbayIcon/ebayIcon.vue'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    },
    icons: {
        values: {
            ebay: {
                component: ebayIcon,
            },
        },
    },
});
