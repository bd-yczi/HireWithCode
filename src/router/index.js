import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('../views/GuidePage.vue')
    },
    {
      path: '/challenge',
      name: 'Challenge',
      component: () => import('../views/ChallengePage.vue')
    },
    {
      path: '/submit',
      name: 'Submit',
      component: () => import('../views/SubmitPage.vue')
    }
  ]
})

export default router 