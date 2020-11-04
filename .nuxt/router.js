import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45516fb0 = () => interopDefault(import('../pages/Breakpoint.vue' /* webpackChunkName: "pages/Breakpoint" */))
const _5e4435f1 = () => interopDefault(import('../pages/Button.vue' /* webpackChunkName: "pages/Button" */))
const _6570df05 = () => interopDefault(import('../pages/Floating.vue' /* webpackChunkName: "pages/Floating" */))
const _03a2e04b = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _32c9e8a2 = () => interopDefault(import('../pages/Stepper.vue' /* webpackChunkName: "pages/Stepper" */))
const _d6f806fa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/Saee/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Breakpoint",
    component: _45516fb0,
    name: "Breakpoint"
  }, {
    path: "/Button",
    component: _5e4435f1,
    name: "Button"
  }, {
    path: "/Floating",
    component: _6570df05,
    name: "Floating"
  }, {
    path: "/inspire",
    component: _03a2e04b,
    name: "inspire"
  }, {
    path: "/Stepper",
    component: _32c9e8a2,
    name: "Stepper"
  }, {
    path: "/",
    component: _d6f806fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
