import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import InitiativeTracker from '../views/InitiativeTracker.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: InitiativeTracker,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
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
