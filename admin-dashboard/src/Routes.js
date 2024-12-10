import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Sale from '@/pages/Sale/Sale';
import Profile from '@/pages/Profile/Profile';
import Produkte2 from '@/pages/Produkte2/Produkte2';
import Produkte from '@/pages/Produkte/Produkte';
import Bestellungen from '@/pages/Bestellungen/Bestellungen';
import Bestellungen2 from '@/pages/BestellungenAbgeschlossen/BestellungenAbgeschlossen';
import Bestellungen3 from '@/pages/BestellungenInbearbeitung/BestellungenInbearbeitung';
import Bestellungen4 from '@/pages/BestellungenStorniert/BestellungenStorniert';
import Notifications from '@/pages/Notifications/Notifications';
import Icons from '@/pages/Icons/Icons';
import Charts from '@/pages/Charts/Charts';
import Kunden from '@/pages/Kunden/Kunden';
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'sale',
        name: 'Sale',
        component: Sale,
      },
      {
        path: 'produkte',
        name: 'Produkte',
        component: Produkte,
      },
      {
        path: 'produkte2',
        name: 'Produkte2',
        component: Produkte2,
      },
      {
        path: 'bestellungen',
        name: 'Bestellungen',
        component: Bestellungen
      },
      {
        path: 'bestellungen2',
        name: 'Bestellungen2',
        component: Bestellungen2
      },
      {
        path: 'bestellungen3',
        name: 'Bestellungen3',
        component: Bestellungen3
      },
      {
        path: 'bestellungen4',
        name: 'Bestellungen4',
        component: Bestellungen4
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'kunden',
        name: 'Kunden',
        component: Kunden
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
