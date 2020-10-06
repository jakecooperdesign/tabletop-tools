import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import InitiativeTracker from '../views/InitiativeTracker.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: InitiativeTracker,
    meta: {
      title: 'Tabletop Tools - Initiative Tracker',
    }
  },
  // {
  //   path: '/initiative-tracker',
  //   name: 'Initiative Tracker',
  //   component: () => import(/* webpackChunkName: "InitiativeTracker" */ '../views/InitiativeTracker.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
