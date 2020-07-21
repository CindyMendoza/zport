import Vue from "vue";
import { BEmbed } from 'bootstrap-vue';

import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import inscripciontaller from "./views/inscripciontaller.vue";
import ProfileMembresia from "./views/ProfileMembresia.vue";
import InscripcionMembresia from "./views/InscripcionMembresia.vue";
Vue.component('b-embed', BEmbed);
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    // {
    //   path: "/components",
    //   name: "components2",
    //   components: {
    //     header: AppHeader,
    //     default: Components2,
    //     footer: AppFooter
    //   }
    // },
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/talleres",
      name: "talleres",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },

    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/membresia-profile",
      name: "membresia-profile",
      components: {
        header: AppHeader,
        default: ProfileMembresia,
        footer: AppFooter
      }
    },
    {
      path: "/inscripcion-taller",
      name: "inscripcion-taller",
      components: {
        header: AppHeader,
        default: inscripciontaller,
        footer: AppFooter
      }
    },
    {
      path: "/inscripcion-membresia",
      name: "inscripcion-membresia",
      components: {
        header: AppHeader,
        default: InscripcionMembresia,
        footer: AppFooter
      }
    }
  ],
  mode: 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
