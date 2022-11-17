/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BrazilView from "../views/BrazilView.vue";
import PanamaView from "../views/PanamaView.vue";
import JamaicaView from "../views/JamaicaView.vue";
import HavaiiView from "../views/HavaiiView.vue";

const routes = [
 {
  path: "/",
  name: "home",
  component: HomeView,
 },
 {
  path: "/brazil",
  name: "brazil",
  component: BrazilView,
 },
 {
  path: "/panama",
  name: "panama",
  component: PanamaView,
 },
 {
  path: "/jamaica",
  name: "jamaica",
  component: JamaicaView,
 },
 {
  path: "/havaii",
  name: "havaii",
  component: HavaiiView,
 },
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
});

export default router;
