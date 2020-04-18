import Vue from 'vue'
import Vuex from 'vuex'
import simple from './modules/simple'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resumesTabs: [
      {
        title: 'Simple',
        img: 'Resume-Template-Simple-723x1024.png'
      },
      {
        title: 'Profesh',
        img: 'Resume-Template-Profesh-723x1024.png'
      },
      {
        title: 'Rad',
        img: 'Resume-Template-Rad-723x1024.png'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    simple
  }
})
