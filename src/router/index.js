import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const CloudCenter = () => import('@/views/manage/center')
const CloudAdmin = () => import('@/views/manage/admin')
const CloudAccount = () => import('@/views/manage/account')
const CloudEmail = () => import('@/views/manage/email')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/my',
      // name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'my',
          name: 'MyCloudCenter',
          component: CloudCenter
        },
        {
          path: 'admin',
          name: 'CloudAdmin',
          component: CloudAdmin
        },
        {
          path: 'account',
          name: 'CloudAccount',
          component: CloudAccount
        },
        {
          path: 'email',
          name: 'CloudEmail',
          component: CloudEmail
        }
      ]
    }
  ]
}

