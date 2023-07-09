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
      <!-- <p>{{ cards[0].desc.replaceAll('\r\n', '<br>') }}</p> -->
      <p>{{ cards[0].desc }}</p>
    </div>

  </div>
</template>

<script setup>
  import { defineProps, ref, onMounted } from "vue";
  import axios from "axios";
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

      console.log(cards.value);
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(() => {
    fetchCards();
  });

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
    }

    .cardDescription {
      padding-top: 1.8rem;
      width: 90%;
      margin: 0 auto;
      p {
        white-space: pre-line;
        line-height: 150%;
      }
    }
  }
</style>
