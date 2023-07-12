<template>
  <div v-if="cards.length > 0" class="cardWrapper">
    <div class="topSection">
      <img @click="router.go(-1)" src="../assets/backArrow.png" />
      <span>{{ cards[0].name }}</span>
      <img @click="addToFavs(cards[0].name)"
              :src="store.state.favList.includes(cards[0].name) ? Fav : notFav" />
    </div>

    <div class="mainImageWrapper">
      <div class="mainImageImg">
        <img :src="cards[0].card_images[0].image_url" alt="cardImage" />
      </div>
    </div>

    <div
      v-if="
        cards[0].type.includes('Monster') || cards[0].type.includes('Token')
      "
      class="informationsWrapper"
    >
      <div>
        <img src="../assets/level.png" />
        <span>{{ cards[0].level }}</span>
      </div>
      <div>
        <img
          :src="
            cards[0].attribute == 'DARK'
              ? dark
              : cards[0].attribute == 'LIGHT'
              ? light
              : cards[0].attribute == 'WATER'
              ? water
              : cards[0].attribute == 'FIRE'
              ? fire
              : cards[0].attribute == 'WIND'
              ? wind
              : cards[0].attribute == 'DIVINE'
              ? divine
              : earth
          "
        />
        <span>{{ cards[0].attribute }}</span>
      </div>
      <div>
        <img src="../assets/swords.png" />
        <span>{{ cards[0].atk }}</span>
      </div>
      <div>
        <img src="../assets/shield.png" />
        <span>{{ cards[0].def }}</span>
      </div>
    </div>
    

    <div
      v-if="cards[0].type.includes('Spell') || cards[0].type.includes('Trap')"
      class="informationsWrapper"
    >
      <div>
        <img
          class="spellOrTrapImg"
          :src="
            cards[0].type == 'Spell Card'
              ? spellCardPath
              : cards[0].type == 'Trap Card'
              ? trapCardPath
              : monsterCardPath
          "
          alt="type of card"
        />
        <span>{{
          cards[0].type == "Spell Card"
            ? "Spell Card"
            : cards[0].type == "Trap Card"
            ? "Trap Card"
            : "Monster Card"
        }}</span>
      </div>
      <div>
        <img
          :src="
            cards[0].race == 'Normal'
              ? normal
              : cards[0].race == 'Continuous'
              ? continous
              : cards[0].race == 'Equip'
              ? equip
              : cards[0].race == 'Ritual'
              ? ritual
              : cards[0].race == 'Field'
              ? field
              : cards[0].race == 'Quick-Play'
              ? quickplay
              : cards[0].race == 'Normal'
              ? normal
              : cards[0].race == 'Continuous'
              ? continous
              : counter
          "
          alt="card race"
        />
        <span>{{ cards[0].race }}</span>
      </div>
      
    </div>

    <div class="cardDescription">
      <h2>Card text:</h2>
      <p>{{ cards[0].desc }}</p>
    </div>

    <div class="cardPrice">
      <h2>Card prices:</h2>
      <p>Card Market Price: ${{ cards[0].card_prices[0].cardmarket_price }}</p>
      <p>Ebay Price: ${{ cards[0].card_prices[0].ebay_price }}</p>
      <p>Amazon Price: ${{ cards[0].card_prices[0].amazon_price }}</p>
    </div>

    <div class="simillarCards">
      <h2>Related cards :</h2>
      <div>
        <h3>By name:</h3>
        <p class="relatedName" v-for="card in relatedCardsByName">{{ card.name }}</p>
      </div>
      <div>
        <h3>By text</h3>
        <p class="relatedDesc" v-for="card in relatedCardsByDesc">{{ card.name }}</p>
      </div>
      
    </div>

  </div>
</template>

<script setup>
  import { defineProps, ref, onMounted } from "vue";
  import axios, { all } from "axios";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";

  const router = useRouter();
  const store = useStore();

  import monsterCardPath from "../assets/Monster.jpg";
  import spellCardPath from "../assets/SpellCard.jpg";
  import trapCardPath from "../assets/TrapCard.jpg";
  import normal from "../assets/Normal.png";
  import continous from "../assets/Continuous.png";
  import counter from "../assets/Counter.png";
  import equip from "../assets/Equip.png";
  import field from "../assets/Field.png";
  import quickplay from "../assets/Quick-play.png";
  import ritual from "../assets/Ritual.png";
  import dark from "../assets/DARK.png";
  import light from "../assets/LIGHT.png";
  import divine from "../assets/DIVINE.png";
  import earth from "../assets/EARTH.png";
  import fire from "../assets/FIRE.png";
  import water from "../assets/WATER.png";
  import wind from "../assets/WIND.png";
  import attack from "../assets/swords.png";
  import defence from "../assets/shield.png";
  import notFav from "../assets/starDisabled.png";
  import Fav from "../assets/star.png";
  const cards = ref([]);

  const cardName = props.cardName;
  const relatedCardsByName = ref([])
  const relatedCardsByDesc = ref([])
  const relatedCardsByArch = ref([])

  const props = defineProps({
    cardName: {
      type: String,
      required: true,
    },
  });

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`
      );
      const fetchedCards = response.data.data;
      cards.value = fetchedCards;

    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllCards = async (cardName) => {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      const allCards = await response.data.data
      
      const cardsRelatedByName = []
      const cardsRelatedByDesc = []
      const cardsRelatedByArchetype = []


      let viewedCard = allCards.filter((el) => {
        return el.name.toLowerCase() === cardName.toLowerCase()
      })

      console.log(viewedCard[0])

      allCards.forEach((el) => {
       if(el.name.toLowerCase().includes(cardName.toLowerCase()) && el.name.toLowerCase() !== cardName.toLowerCase()){
        cardsRelatedByName.push(el)
       }

       if(el.desc.toLowerCase().includes(cardName.toLowerCase())){
          cardsRelatedByDesc.push(el)
        }

       if(el.archetype === viewedCard[0].archetype){
          cardsRelatedByArchetype.push(el)
       }
      
      })
      console.log('Cards by archetype', cardsRelatedByArchetype)

      relatedCardsByName.value = cardsRelatedByName
      relatedCardsByDesc.value = cardsRelatedByDesc
      relatedCardsByArch.value = cardsRelatedByArchetype

    } catch(error) {
      console.log(error)
    }
  }

  onMounted(() => {
    fetchCards();
  });


  fetchAllCards(cardName)


  const addToFavs = (name) => {
    store.commit("addToFavs", name);
  };


  


</script>

<style lang="scss">
  .cardWrapper {
    .topSection {
      width: 90%;
      margin: 0 auto;
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 2.1875rem;
        height: 2.1875rem;
      }
    }

    .mainImageWrapper {
      margin: 1.8rem auto;
      display: flex;
      justify-content: center;

      img {
        width: 15.625rem;
        height: 22.125rem;
      }
    }

    .informationsWrapper {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: 1rem;
      }

      .spellOrTrapImg {
        height: 30px;
        width: 20px;
      }
    }

    .cardDescription {
      padding-top: 1.8rem;
      width: 90%;
      margin: 0 auto;

      h2 {
        padding-bottom: 1rem;
      }
      
      p {
        white-space: pre-line;
        line-height: 150%;
        padding-bottom: 2rem;
      }
    }

    .cardPrice {
      width: 90%;
      margin: 0 auto;
      font-size: 1rem;

      h2 {
        padding-bottom: 1rem;
      }

      p {
        border-bottom: 1px solid grey;
        width: fit-content;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
    }

    .simillarCards {
      width: 90%;
      margin: 0 auto;
      font-size: 1rem;
      padding-top: 2rem;

      div {
        padding: 1rem 0;
      }
    }
  }
</style>
