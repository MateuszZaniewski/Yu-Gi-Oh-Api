<template>
    <div v-for="card in props.message">
        <div class="cards__card">
            <div class="card--image">
                <img :src="card.card_images[0].image_url" />
            </div>
            <div class="card--information">
                <div class="information--name"><p>Name: {{card.name}}</p></div>
                <div class="information--others">



                    <div class="type others">
                      <div class="type--imageBox">
                        <span>Type</span>
                        <img class="type--image" :src="
                        card.type == 'Spell Card' ? SPELL : 
                        card.type == 'Trap Card' ? TRAP : MONSTER">
                      </div>
                        <span class="others--info">{{ card.type ? card.type : 'N/A' }}</span>
                    </div>



                    <div class="attribute others">
                      <div class="type--imageBox">
                        <span>Attribute</span>
                        <img :src="card.attribute == 'DARK' ? DARK :
                        card.attribute == 'LIGHT' ? LIGHT :
                        card.attribute == 'DIVINE' ? DIVINE :
                        card.attribute == 'EARTH' ? EARTH :
                        card.attribute == 'FIRE' ? FIRE :
                        card.attribute == 'WATER' ? WATER : 
                        card.attribute == 'WIND' ? WIND : null">
                      </div>
                        <span class="others--info">{{ card.attribute ? card.attribute : 'N/A' }}</span>
                    </div>



                    <div class="race others">
                      <div class="type--imageBox">
                        <span>Typing</span>
                        <img :src="
                        card.race == 'Equip' ? Equip : 
                        card.race == 'Field' ? Field :
                        card.race == 'Continuous' ? Continuous :
                        card.race == 'Quick-Play' ? QuickPlay :
                        card.race == 'Counter' ? Counter :
                        card.race == 'Ritual' ? Ritual : null " />
                      </div>
                        <span class="others--info">{{ card.race.toUpperCase() }} /  {{ card.frameType }}</span> 
                    </div>



                    <div class="level others">
                        <div class="type--imageBox">
                          <span>Level/Rank</span>
                          <img :src="Level"/>
                        </div>
                        <span class="others--info">{{ card.level ? card.level : 'N/A' }}</span>
                    </div>



                    <div class="attack others">
                      <div class="type--imageBox">
                        <span>ATK</span>
                        <img :src="Atk">
                      </div>
                        <span class="others--info">{{ card.atk ? card.atk : 'N/A' }}</span>
                    </div>



                    <div class="defence others">
                      <div class="type--imageBox">
                        <span>DEF</span>
                        <img :src="Def">
                      </div>
                        <span class="others--info">{{ card.def ? card.def : 'N/A' }}</span>
                    </div>



                    <div class="price others">
                      <div class="type--imageBox">
                        <span>Price</span>
                        <img :src="Dollar">
                      </div>
                        
                        <span class="others--info">{{ card.card_prices[0].cardmarket_price }}$</span>
                    </div>



                    <div class="description">
                        <span>Card description:</span>
                        <p>{{ card.desc ? card.desc : N/A }}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['message'])

import DARK from '../assets/DARK.png';
import LIGHT from '../assets/LIGHT.png';
import DIVINE from '../assets/DIVINE.png';
import EARTH from '../assets/EARTH.png';
import FIRE from '../assets/FIRE.png';
import WATER from '../assets/WATER.png';
import WIND from '../assets/WIND.png';
import SPELL from '../assets/SPELL.svg'
import TRAP from '../assets/TRAP.svg';
import MONSTER from '../assets/theDog.webp';

import Counter from '../assets/Counter.png';
import Continuous from '../assets/Continuous.png';
import QuickPlay from '../assets/Quick-Play.png';
import Field from '../assets/Field.png';
import Ritual from '../assets/Ritual.png';
import Equip from '../assets/Equip.png';

import Level from '../assets/level.png';
import Atk from '../assets/swords.png';
import Def from '../assets/shield.png';
import Dollar from '../assets/dollar.png'

</script>

<style scoped>

@media screen and (max-width: 1023px) {

  .cards__card {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    border-bottom: 1px solid grey;
  }

  .cards__card p {
    text-align: center;
    font-size: 1.4rem;
  }


  .card--image {
    width: auto;
    display: flex;
    justify-content: center;
  }

  .card--image img {
    width: 100%;
  }

  .card--information {
    width: auto;
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
    justify-content: center;
    font-size: 0.8rem;
    background-color: brown;
    width: 35%;
    padding: 10px 10px;
    border-radius: 0.3rem;
    color: white;
  }

  .others--info {
    font-weight: bold;
    padding-top: 5%;
    font-size: 1rem;
  }

  .type--imageBox{
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .type--image {
    height: 30px;
    width: 30px;
    max-height: 30px;
    max-width: 30px;
  }

  .description {
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: flex-start;
  }

  .description span {
    text-align: center;
    font-size: 1rem;
    padding-bottom: 2vh;
  }

  .description p {
    margin: 0;
    font-size: 1.1rem;
    text-align: left;
    padding-bottom: 3vh;
    
  }
}

@media screen and (min-width: 1024px) {
    
    .cards__card {
    width: 100vw;
    display: flex;
    padding-bottom: 3vh;
    border-bottom: 1px solid grey;
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
    background-color: rgb(245, 243, 243);
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

  .type--imageBox{
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .type--image {
    height: 30px;
    width: 30px;
    max-height: 30px;
    max-width: 30px;
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