import { createStore} from 'vuex'

const store =  createStore({
    state() {
        return {
            resetAtribute: false,
            atributes : ['DARK', 'LIGHT', 'EARTH', 'WATER', 'FIRE', 'WIND', 'DIVINE'],
            selectedAtributes : [],

            resetRace : false,
            races : ['Equip', 'Field', 'Quick-Play', 'Ritual', 'Continuous', 'Counter', 'Normal'],
            selectedRaces : [],

            resetMonster : false,
            monsters : ['Spellcaster', 'Dragon', 'Zombie', 'Warrior', 'Beast-Warrior', 'Beast', 'Winged Beast', 'Fiend', 'Fairy', 'Insect', 'Dinosaur', 'Reptile' , 'Fish', 'Sea Serpent' , 'Aqua' , 'Pyro' , 'Thunder' , 'Rock' , 'Plant' , 'Machine' , 'Psychic', 'Divine-Beast', 'Wyrm', 'Cyberse', 'Creator-God'],
            selectedMonsters : [],

            resetType : false,
            types : ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'XYZ', 'Pendulum', 'Link', 'Toon', 'Spirit' , 'Union' , 'Gemini' , 'Tuner', 'Flip'],
            selectedCardTypes : [],

            resetLevel : false,
            levels : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13'],
            selectedLevels : [],

            isCleared : false,
        }
        
    },
    mutations: {
        resetAllFilters(state) {
            state.resetAtribute = true
            state.selectedAtributes = []
            console.log('ResetAtribute = true')
            state.resetRace = true
            state.selectedRaces = []
            console.log('ResetRaces = true')
            state.resetMonster = true
            state.selectedMonsters = []
            console.log('ResetMonster = true')
            state.resetType = true
            state.selectedCardTypes = []
            console.log('ResetType = true')
            state.resetLevel = true
            state.selectedLevels = []
            console.log('ResetLevel = true')
        },
        setDefaultForAtributes(state) {
            state.resetAtribute = false
        },
        setDefaultForRaces(state) {
            state.resetRace = false
        },
        setDefaultForMonsters(state) {
            state.resetMonster = false
        },
        setDefaultForTypes(state) {
            state.resetType = false
        },
        setDefaultForLevels(state) {
            state.resetLevel = false
        },

        addLevel(state, payload){
                if(!state.selectedLevels.includes(payload)){
                    state.selectedLevels.push(payload)
                } else {
                    const index = state.selectedLevels.indexOf(payload)
                    if(index !== -1){
                        state.selectedLevels.splice(index,1)
                    }
                }
        },
        addCardType(state, payload){
            if(!state.selectedCardTypes.includes(payload)){
                state.selectedCardTypes.push(payload)
            } else {
                const index = state.selectedCardTypes.indexOf(payload)
                if(index !== -1){
                    state.selectedCardTypes.splice(index,1)
                }
            }
        },
        addMonsterType(state, payload){
            if(!state.selectedMonsters.includes(payload)){
                state.selectedMonsters.push(payload)
            } else {
                const index = state.selectedMonsters.indexOf(payload)
                if(index !== -1){
                    state.selectedMonsters.splice(index,1)
                }
            }
        },
        addRace(state, payload){
            if(!state.selectedRaces.includes(payload)){
                state.selectedRaces.push(payload)
            } else {
                const index = state.selectedRaces.indexOf(payload)
                if(index !== -1){
                    state.selectedRaces.splice(index,1)
                }
            }
        },
        addAtribute(state, payload){
            if(!state.selectedAtributes.includes(payload)){
                state.selectedAtributes.push(payload)
            } else {
                const index = state.selectedAtributes.indexOf(payload)
                if(index !== -1){
                    state.selectedAtributes.splice(index,1)
                }
            }
        }
    },
    actions: {

    },
    modules: {

    }
})

export default store