import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EventRegistration from '@/components/EventRegistration'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/app',
      name: 'EventRegistration',
      component: EventRegistration
    },

    {
      path: '/app/test',
      name: 'test',
      component: test
    }
    
  ]
})
