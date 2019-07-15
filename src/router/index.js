import Vue from 'vue'
import Router from 'vue-router'
import Success from './../page/success/success.vue'
import Payment from './../page/payment/payment.vue'
import Customer from './../page/customer-service/customer.vue'
import Evaluate from './../page/evaluate/evaluate.vue'

import Domestic from './../component/customer-second/domestic.vue'
import Timesharing from './../component/customer-second/timesharing.vue'
import Testdrive from './../component/customer-second/testdrive.vue'
import Globalrent from './../component/customer-second/globalrent.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Success',
      component: Success
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer,
      children:[
        // {path: '/',name: 'Domestic',redirect: 'Domestic'},
        {path: '/domestic',name: 'Domestic',component: Domestic},
        {path: '/timesharing',name: 'Timesharing',component: Timesharing},
        {path: '/testdrive',name: 'Testdrive',component: Testdrive},
        {path: '/globalrent',name: 'Globalrent',component: Globalrent},
      ]
    },
    {
      path:'/evaluate',
      name:'Evaluate',
      component:Evaluate
    }
  ]
})
