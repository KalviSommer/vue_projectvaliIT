import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Bank from '../views/Bank.vue'
import Employee from '../views/Employee.vue'
import EditEmployee from '../views/EditEmployee.vue'
import AddEmployee from '../views/AddEmployee.vue'
import BankAccounts from '../views/BankAccounts.vue'
import CreateAccount from '../views/CreateAccount.vue'
import AddClient from '../views/AddClient.vue'
import Transactions from '../views/Transactions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/bank',
    name: 'Bank',
    component: Bank
  },
  {
    path: '/bankAccounts',
    name: 'BankAccounts',
    component: BankAccounts
  },
  {
    path: '/createAccount',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/addClient',
    name: 'AddClient',
    component: AddClient
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/editEmployee/:id',
    name: 'EditEmployee',
    component: EditEmployee
  },
  {
    path: '/addEmployee/:id',
    name: 'AddEmployee',
    component: AddEmployee
  },
  {
    path: '/functions',
    name: 'Functions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
