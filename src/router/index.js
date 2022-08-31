import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    query: {
      lang: 'it',
      selLink: 'Home',
    },
    component: Home,
    props: true,
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    props: true,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contacts,
    props: true,
  },
  {
    path: '/',
    redirect: Home,
    query: {
      lang: 'it',
      selLink: 'Home',
    },
    component: Home,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
