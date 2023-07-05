import { createStore} from 'vuex'

const store =  createStore({
    state() {
        return {
            mainCardTypes : ['Monster Cards', 'Spell Cards', 'Trap Cards'],
            selectedMainCardTypes : [],

            resetAtribute: false,
            atributes : ['DARK', 'LIGHT', 'EARTH', 'WATER', 'FIRE', 'WIND', 'DIVINE'],
            selectedAtributes : [],
            preSelectedAtributes : ['DARK', 'LIGHT', 'EARTH', 'WATER', 'FIRE', 'WIND', 'DIVINE'],

            spellType : false,
            spellTypes : ['Equip', 'Field', 'Quick-Play', 'Ritual', 'Continuous', 'Normal'],
            selectedSpellTypes : [],
            preSelectedSpellTypes : ['Equip', 'Field', 'Quick-Play', 'Ritual', 'Continuous', 'Normal'],

            trapType : false,
            trapTypes : ['Normal', 'Counter', 'Continuous'],
            selectedTrapTypes : [],
            preSelectedTrapTypes : ['Normal', 'Counter', 'Continuous'],

            resetMonster : false,
            monsters : ['Spellcaster', 'Dragon', 'Zombie', 'Warrior', 'Beast-Warrior', 'Beast', 'Winged Beast', 'Fiend', 'Fairy', 'Insect', 'Dinosaur', 'Reptile' , 'Fish', 'Sea Serpent' , 'Aqua' , 'Pyro' , 'Thunder' , 'Rock' , 'Plant' , 'Machine' , 'Psychic', 'Divine-Beast', 'Wyrm', 'Cyberse', 'Creator-God'],
            selectedMonsters : [],
            preSelectedMonsters : ['Spellcaster', 'Dragon', 'Zombie', 'Warrior', 'Beast-Warrior', 'Beast', 'Winged Beast', 'Fiend', 'Fairy', 'Insect', 'Dinosaur', 'Reptile' , 'Fish', 'Sea Serpent' , 'Aqua' , 'Pyro' , 'Thunder' , 'Rock' , 'Plant' , 'Machine' , 'Psychic', 'Divine-Beast', 'Wyrm', 'Cyberse', 'Creator-God'],

            resetType : false,
            types : ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'XYZ', 'Pendulum', 'Link', 'Toon', 'Spirit' , 'Union' , 'Gemini' , 'Tuner', 'Flip'],
            selectedCardTypes : [],
            preSelectedCardTypes : ['Normal', 'Effect', 'Ritual', 'Fusion', 'Synchro', 'XYZ', 'Pendulum', 'Link', 'Toon', 'Spirit' , 'Union' , 'Gemini' , 'Tuner', 'Flip'],

            resetLevel : false,
            levels : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13'],
            selectedLevels : [],
            preSelectedLevels : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13'],

            // do usunięcia - nie używane
            isCleared : false,
            allBox : true,
            monstersBox : false,
            spellsBox : false,
            trapsBox : false,


            allfiltersArray : [],

            ByAttackAscending : false,
            ByAttackDescending: false,
            ByDefenceAscending: false,
            ByDefenceDescending: false,

            gotoPage : 1,

            galleryActive : true,
            listActive : false,
            filtersActive : false,

            favList : [],

            mainCardTypeOpen : false,
            attributeOpen : false,
            monsterTypeOpen : false,
            cardTypeOpen : false,
            levelOpen : false,
            spellOpen : false,
            trapOpen : false,
            attackOpen : false,
            defenceOpen : false,

            attackFrom: 0,
            attackTo: 0,
            defenceFrom: 0,
            defenceTo: 0,

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
            state.selectedMainCardTypes = []
            state.selectedAtributes = []
            state.selectedMonsters = []
            state.selectedCardTypes = []
            state.selectedLevels = []
            state.selectedSpellTypes = []
            state.selectedTrapTypes = []
            state.ByAttackAscending = false,
            state.ByAttackDescending = false,
            state.ByDefenceAscending = false,
            state.ByDefenceDescending = false,
            console.log('Filtry zostały zresetowane')
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

        addMainCardType(state, payload){
            if(state.selectedMainCardTypes.length == 0){
                state.selectedMainCardTypes.push(payload)
            } else {
                if(state.selectedMainCardTypes.includes(payload)){
                    return
                } else {
                    state.selectedMainCardTypes = []
                    state.selectedMainCardTypes.push(payload)
                }
            }
        },
        resetMainCardType(state) {
            state.selectedMainCardTypes = []
            state.selectedAtributes = []
            state.selectedMonsters = []
            state.selectedCardTypes = []
            state.selectedLevels = []
            state.selectedSpellTypes = []
            state.selectedTrapTypes = []
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
            state.selectedMainCardTypes = ['Monster Cards']
        },
        resetLevels(state) {
            state.selectedLevels = []
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
            state.selectedMainCardTypes = ['Monster Cards']
        },
        resetCardTypes(state) {
            state.selectedCardTypes = []
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
            state.selectedMainCardTypes = ['Monster Cards']
        },
        resetMonsterTypes(state){
            state.selectedMonsters = []
        },
        addSpell(state, payload){
            if(!state.selectedSpellTypes.includes(payload)){
                state.selectedSpellTypes.push(payload)
            } else {
                const index = state.selectedSpellTypes.indexOf(payload)
                if(index !== -1){
                    state.selectedSpellTypes.splice(index,1)
                }
            }
            state.selectedMainCardTypes = ['Spell Cards']
        },
        resetSpells(state) {
            state.selectedSpellTypes = []
        },
        addTrap(state, payload){
            if(!state.selectedTrapTypes.includes(payload)){
                state.selectedTrapTypes.push(payload)
            } else {
                const index = state.selectedTrapTypes.indexOf(payload)
                if(index !== -1){
                    state.selectedTrapTypes.splice(index,1)
                }
            }
            state.selectedMainCardTypes = ['Trap Cards']
        },
        resetTraps(state){
            state.selectedTrapTypes = []
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
            state.selectedMainCardTypes = ['Monster Cards']
        },
        resetAtributes(state) {
            state.selectedAtributes = []
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
        showGallery(state) {
            state.galleryActive = true
            state.listActive = false
        },
        showList(state) {
            state.galleryActive = false
            state.listActive = true
        },
        toggleFilters(state) {
            state.filtersActive = !state.filtersActive
        },
        addToFavs(state, payload) {
            if(!state.favList.includes(payload)){
                state.favList.push(payload)
            } else {
                const index = state.favList.indexOf(payload)
                if(index !== -1){
                    state.favList.splice(index,1)
                }
            }
        },
        handleAttackFrom(state, payload){
            state.attackFrom = payload
            state.selectedMainCardTypes = ['Monster Cards']
        },
        handleAttackTo(state, payload){
            state.attackTo = payload
            state.selectedMainCardTypes = ['Monster Cards']
        },
        handleDefenceFrom(state, payload){
            state.defenceFrom = payload
            state.selectedMainCardTypes = ['Monster Cards']
        },
        handleDefenceTo(state, payload){
            state.defenceTo = payload
            state.selectedMainCardTypes = ['Monster Cards']
        },

        openAndCloseMainCardTypeFilter(state) {
            state.mainCardTypeOpen = !state.mainCardTypeOpen
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseAttributeFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = !state.attributeOpen
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseMonsterTypeFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = !state.monsterTypeOpen
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseCardTypeFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = !state.cardTypeOpen
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseLevelFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = !state.levelOpen
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseSpellFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = !state.spellOpen
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseTrapFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = !state.trapOpen
            state.attackOpen = false
            state.defenceOpen = false
        },
        openAndCloseAttackFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = !state.attackOpen
            state.defenceOpen = false
        },
        openAndCloseDefenceFilter(state) {
            state.mainCardTypeOpen = false
            state.attributeOpen = false
            state.monsterTypeOpen = false
            state.cardTypeOpen = false
            state.levelOpen = false
            state.spellOpen = false
            state.trapOpen = false
            state.attackOpen = false
            state.defenceOpen = !state.defenceOpen
        },
    },
    actions: {

    },
    modules: {

    }
})

export default store