import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  console.log('permission>to:', to)
 //  console.log('permission>from:', from)
  if (to.name === 'CloudAccount') {
    console.log('store.getters.showModal:', store.getters.showModal)
    store.commit('SET_AGREE_MODAL', true)
  } else {
    next()
  }
 })
