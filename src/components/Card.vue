<template>
    <div v-for="card in props.message">
        <div class="cards__card">
            <div class="card--image">
                <img :src="card.card_images[0].image_url" />
            </div>
            <div class="card--information">
                <div class="information--name"><p>{{card.name}}</p></div>
                <div class="information--others">
                    <div class="type others">
                        <span>Type</span>
                        <img :src="card.attribute == 'DARK' ? DARK :
                        card.attribute == 'LIGHT' ? LIGHT :
                        card.attribute == 'DIVINE' ? DIVINE :
                        card.attribute == 'EARTH' ? EARTH :
                        card.attribute == 'FIRE' ? FIRE :
                        card.attribute == 'WATER' ? WATER : 
                        card.attribute == 'WIND' ? WIND :
                        card.type == 'Spell Card' ? SPELL : TRAP">
                        <span class="others--info">{{ card.type ? card.type : 'N/A' }}</span>
                        
                    </div>
                    <div class="attribute others">
                        <span>Attribute</span>
                        <span class="others--info">{{ card.attribute ? card.attribute : 'N/A' }}</span>
                    </div>
                    <div class="race others">
                        <span>Typing</span>
                        <span class="others--info">{{ card.race.toUpperCase() }} /  {{ card.frameType }}</span> 
                    </div>
                    <div class="level others">
                        <span>Level/Rank</span>
                        <span class="others--info">{{ card.level ? card.level : 'N/A' }}</span>
                    </div>
                    <div class="attack others">
                        <span>ATK</span>
                        <span class="others--info">{{ card.atk ? card.atk : 'N/A' }}</span>
                    </div>
                    <div class="defence others">
                        <span>DEF</span>
                        <span class="others--info">{{ card.def ? card.def : 'N/A' }}</span>
                    </div>
                    <div class="price others">
                        <span>Price</span>
                        <span class="others--info">{{ card.card_prices[0].cardmarket_price }}$</span>
                    </div>
                    <div class="description">
                        <span>Card Text</span>
                        <p>{{ card.desc ? card.desc : N/A }}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['message'])
console.log(props.message)

import DARK from '../assets/DARK.png';
import LIGHT from '../assets/LIGHT.png';
import DIVINE from '../assets/DIVINE.png';
import EARTH from '../assets/EARTH.png';
import FIRE from '../assets/FIRE.png';
import WATER from '../assets/WATER.png';
import WIND from '../assets/WIND.png';
import SPELL from '../assets/SPELL.svg'
import TRAP from '../assets/TRAP.svg'

const setupAtribute = (card) => {
    return card.attribute == 'DARK' ? DARK :
    card.attribute == 'LIGHT' ? LIGHT :
    card.attribute == 'DIVINE' ? DIVINE :
    card.attribute == 'EARTH' ? EARTH :
    card.attribute == 'FIRE' ? FIRE :
    card.attribute == 'WATER' ? WATER : WIND
}

</script>

<style scoped>

@media screen and (min-width: 1024px) {
    
    .cards__card {
    width: 100vw;
    display: flex;
  }

  .cards__card p {
    text-align: center;
    font-size: 1.4rem;
  }


  .card--image {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .card--information {
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }

  .information--others {
    display: flex;
    flex-flow: row wrap;
    gap: 40px;
    justify-content: center;
  }

  .others {
    display: flex;
    flex-flow: column nowrap;
    background-color: brown;
    width: 30%;
    padding: 10px 10px;
    border-radius: 0.3rem;
    color: white;
  }

  .others--info {
    font-weight: bold;
    padding-top: 5%;
    font-size: 1.2rem;
  }

  .description {
    display: flex;
    flex-flow: column;
    width: 100%;
  }

  .description span {
    text-align: center;
    font-size: 1.6rem;
  }

  .description p {
    padding: 0 2rem 0 2rem;
  }
}


</style>