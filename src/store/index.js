import { createStore} from 'vuex'

const store =  createStore({
    state() {
        return {
            reset: false, 
            races : ['Equip', 'Field', 'Quick-Play', 'Ritual', 'Continuous', 'Counter', 'Normal']
        }
        
    },
    mutations: {
        resetfunc(state){
            state.reset = true
        },
        setdefault(state){
            state.reset = false
        },
        resetRaces(state) {
            state.races = []
        }
    },
    actions: {

    },
    modules: {

    }
})

export default store