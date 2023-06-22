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
            allBox : true,
            monstersBox : false,
            spellsBox : false,
            trapsBox : false,


            allfiltersArray : [],

            ByAttackAscending : true,
            ByAttackDescending: true,
            ByDefenceAscending: true,
            ByDefenceDescending: true,

            gotoPage : 1,

            favList : ['Dark Magician', "\"A\" Cell Breeding Device"],

        }
        
    },
    mutations: {
        showAllFilters(state) {
            state.allBox = true
            state.monstersBox = false
            state.spellsBox = false
            state.trapsBox = false
        },
        showMonsterFilters(state) {
            state.allBox = false
            state.monstersBox = true
            state.spellsBox = false
            state.trapsBox = false
        },
        showSpellFilters(state){
            state.allBox = false
            state.monstersBox = false
            state.spellsBox = true
            state.trapsBox = false
        },
        showTrapsFilters(state) {
            state.allBox = false
            state.monstersBox = false
            state.spellsBox = false
            state.trapsBox = true
        },


        resetAllFilters(state) {
            state.selectedAtributes = []
            state.selectedCardTypes = []
            state.selectedLevels = []
            state.selectedMonsters = []
            state.selectedRaces = []
            state.allfiltersArray = []
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
        },

        setDefaultForSelectedAtributes(state) {
            if(state.selectedAtributes.length == 0){
                state.selectedAtributes = state.atributes
            }
        },
        setDefaultForSelectedMonsterTypes(state) {
            if(state.selectedMonsters.length == 0){
                state.selectedMonsters = state.monsters
            }
        },
        setDefaultForSelectedCardTypes(state) {
            if(state.selectedCardTypes.length == 0){
                state.selectedCardTypes = state.types
            }
        },
        setDefaultForSelectedLevels(state) {
            if(state.selectedLevels.length == 0){
                state.selectedLevels = state.levels
            }
        },
        setDefaultForSelectedRaces(state) {
            if(state.selectedRaces.leght == 0){
                state.selectedLevels = state.levels
            }
        },
        populateAllFiltersArray(state) {
            state.allfiltersArray.push(state.selectedAtributes)
            state.allfiltersArray.push(state.selectedMonsters)
            state.allfiltersArray.push(state.selectedCardTypes)
            state.allfiltersArray.push(state.selectedLevels)
            state.allfiltersArray.push(state.selectedRaces)
            state.allfiltersArray = Array.from(new Set(state.allfiltersArray.flat()))
            console.log(state.allfiltersArray)
        },
        sortByAttackAscending(state) {
            state.ByAttackAscending = true
            state.ByAttackDescending = false
            state.ByDefenceAscending = false
            state.ByDefenceDescending = false

        },
        sortByAttackDescending(state) {
            state.ByAttackAscending = false
            state.ByAttackDescending = true
            state.ByDefenceAscending = false
            state.ByDefenceDescending = false

        },
        sortByDefenceAscending(state) {
            state.ByAttackAscending = false
            state.ByAttackDescending = false
            state.ByDefenceAscending = true
            state.ByDefenceDescending = false

        },
        sortByDefenceDescending(state) {
            state.ByAttackAscending = false
            state.ByAttackDescending = false
            state.ByDefenceAscending = false
            state.ByDefenceDescending = true

        },
    },
    actions: {

    },
    modules: {

    }
})

export default store