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
        component: () => import('../components/builderComps/builderSubViews/PersonalInfo.vue')
      },
      {
        path: '/resume-builder/contact',
        name: 'ResumeBuilderContact',
        props: true,
        component: () => import('../components/builderComps/builderSubViews/ContanctInfo.vue')
      },
      {
        path: '/resume-builder/skills',
        name: 'ResumeBuilderSkills',
        props: true,
        component: () => import('../components/builderComps/builderSubViews/SkillsInfo.vue')
      },
      {
        path: '/resume-builder/work',
        name: 'ResumeBuilderWork',
        props: true,
        component: () => import('../components/builderComps/builderSubViews/WorkHistory.vue')
      },
      {
        path: '/resume-builder/education',
        name: 'ResumeBuilderEducation',
        props: true,
        component: () => import('../components/builderComps/builderSubViews/Education.vue')
      },
      {
        path: '/resume-builder/organization',
        name: 'ResumeBuilderOrganization',
        props: true,
        component: () => import('../components/builderComps/builderSubViews/Organization.vue')
      },
      {
        path: '/resume-builder/languages',
        name: 'ResumeBuilderLanguages',
        props: true,
        component: () => import('../components/builderComps/builderSubViews/Languages.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
