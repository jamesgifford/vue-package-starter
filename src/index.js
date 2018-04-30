import StarterComponent from './components/StarterComponent.vue'

const VueStarterComponent = {
    install (Vue) {
        Vue.component('starter-component', StarterComponent)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueStarterComponent)
}

export default VueStarterComponent

export {
    StarterComponent
}
