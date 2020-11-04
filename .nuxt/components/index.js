export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as Breakpoint } from '../../components/Breakpoint.vue'
export { default as Breakpoint2 } from '../../components/Breakpoint2.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Button2 } from '../../components/Button2.vue'
export { default as Floating } from '../../components/Floating.vue'
export { default as RoyalSundaramLogo } from '../../components/RoyalSundaramLogo.vue'
export { default as Stepper } from '../../components/Stepper.vue'
export { default as Ticks } from '../../components/Ticks.vue'

export const LazyBreadcrumb = import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/Breadcrumb" */).then(c => c.default || c)
export const LazyBreakpoint = import('../../components/Breakpoint.vue' /* webpackChunkName: "components/Breakpoint" */).then(c => c.default || c)
export const LazyBreakpoint2 = import('../../components/Breakpoint2.vue' /* webpackChunkName: "components/Breakpoint2" */).then(c => c.default || c)
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyButton2 = import('../../components/Button2.vue' /* webpackChunkName: "components/Button2" */).then(c => c.default || c)
export const LazyFloating = import('../../components/Floating.vue' /* webpackChunkName: "components/Floating" */).then(c => c.default || c)
export const LazyRoyalSundaramLogo = import('../../components/RoyalSundaramLogo.vue' /* webpackChunkName: "components/RoyalSundaramLogo" */).then(c => c.default || c)
export const LazyStepper = import('../../components/Stepper.vue' /* webpackChunkName: "components/Stepper" */).then(c => c.default || c)
export const LazyTicks = import('../../components/Ticks.vue' /* webpackChunkName: "components/Ticks" */).then(c => c.default || c)
