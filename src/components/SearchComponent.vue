<template>

    <section>
        <div class="search-field">
            <div class="searchbar">
                <input type="text" :value="cardName" @input="updateValue($event.target.value)" placeholder="Enter keyword">
                <span>X</span>
            </div>
            <div>
            <div class="search-type-select">
                <select>
                    <option selected value="CardName">Search by Card Name</option>
                    <option value="CardText">Search by Card Text</option>
                </select>
            </div>
            </div>
            <div class="search-button">
                <button>Search</button>
            </div>
            
        </div>

        <div class="filter-field">
            <span class="field-head">Search Filters <span>\/</span></span>
        </div>
    </section>

</template>

<script setup>

import { defineEmits, ref } from 'vue';




// colors 
// #a8d0db - blue 
// #2b4570 - marine blue
// #7180ac - fiolet blue
// #e49273 - pomarancz
// #a37a74 - rdza

</script>

<style lang="scss" scoped>

section {
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid #e49273;
}

.search-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    background-color: #a8d0db;
    padding: 0.5rem 0;

    .searchbar {
        width: 40vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    
        input {
            border: none;
            outline: none;
            padding: 0.25rem 0.5rem;
            width: 100%;
        }
    
        span {
            padding-right: 0.5rem;
            color: rgb(36, 35, 35);
            position: absolute;
            right: 0;
        }
    }
    
    .search-type-select {
        width: fit-content;

        select {
            padding: 0.25rem 0.5rem;
        }
    }

    .search-button {

        button {
            padding: 0.25rem 0.5rem;
            background-color: #e49273;
        }
    }

}


.filter-field {
    background-color: #2b4570;
    position: relative;
    display: flex;
    justify-content: center;
    color: white;

    .field-head{
        margin: 0;
        padding: 2vh 0;
        text-align: center;
    }
}


</style>