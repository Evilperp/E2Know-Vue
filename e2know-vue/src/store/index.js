import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import activity from './activity'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab,
        activity
    }
})
