import { createStore} from 'vuex'

const store =  createStore({
    state() {
        return {
            resetAtribute: false,
            atributes : ['DARK', 'LIGHT', 'EARTH', 'WATER', 'FIRE', 'WIND', 'DIVINE'],

            resetRace : false,
            races : ['Equip', 'Field', 'Quick-Play', 'Ritual', 'Continuous', 'Counter', 'Normal'],

            resetMonster : false,
            monsters : ['Spellcaster', 'Dragon', 'Zombie', 'Warrior', 'Beast-Warrior', 'Beast', 'Winged Beast', 'Fiend', 'Fairy', 'Insect', 'Dinosaur', 'Reptile' , 'Fish', 'Sea Serpent' , 'Aqua' , 'Pyro' , 'Thunder' , 'Rock' , 'Plant' , 'Machine' , 'Psychic', 'Divine-Beast', 'Wyrm', 'Cyberse', 'Creator-God'],

            resetType : false,
            types : ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'XYZ', 'Pendulum', 'Link', 'Toon', 'Spirit' , 'Union' , 'Gemini' , 'Tuner', 'Flip'],

            resetLevel : false,
            levels : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13'],
        }
        
    },
    mutations: {
        resetAllFilters(state) {
            state.resetAtribute = true
            console.log('ResetAtribute = true')
            state.resetRace = true
            console.log('ResetRaces = true')
            state.resetMonster = true
            console.log('ResetMonster = true')
            state.resetType = true
            console.log('ResetType = true')
            state.resetLevel = true
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
        preFilter(state) {
            return cards.value.filter((card) =>
              searchByName.value
                ? card.name.toLowerCase().includes(searchText.value.toLowerCase())
                : card.desc.toLowerCase().includes(searchText.value.toLowerCase())
            )
        },
    },
    actions: {

    },
    modules: {

    }
})

export default store