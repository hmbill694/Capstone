import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/resume-select',
    name: 'ResumeSelect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ResumeSelect.vue')
  },
  {
    path: '/resume-builder',
    name: 'ResumeBuilder',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ResumeBuilder.vue'),
    children: [
      {
        path: '/resume-builder/personal',
        name: 'ResumeBuilderPersonal',
        props: true,
        component: () => import('../components/PersonalInfo.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
