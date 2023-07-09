<template>
  <ul v-if="store.state.listActive" class="card_wrapperList">
    <li
      class="cardList"
      v-for="card in searchByNameOrDescription.slice(startPoint, currentPage)"
      :key="card.id"
    >
      <div class="uniqueCardList">
        <div class="uniqueCard__image--wrapper">
          <img :src="card.card_images[0].image_url" alt="cardImage" />
        </div>

        <div class="uniqueCard__informations--wrapper">
          <div class="favs">
            <img
              @click="addToFavs(card.name)"
              class="default"
              :src="store.state.favList.includes(card.name) ? Fav : notFav"
            />
          </div>
          <div class="cardName">
            <h2>{{ card.name }}</h2>
          </div>

          <div
            v-if="card.type.includes('Monster') || card.type.includes('Token')"
            class="informationsWrapper"
          >
            <div>
              <img src="../assets/level.png" />
              <span>{{ card.level }}</span>
            </div>
            <div>
              <img
                :src="
                  card.attribute == 'DARK'
                    ? dark
                    : card.attribute == 'LIGHT'
                    ? light
                    : card.attribute == 'WATER'
                    ? water
                    : card.attribute == 'FIRE'
                    ? fire
                    : card.attribute == 'WIND'
                    ? wind
                    : card.attribute == 'DIVINE'
                    ? divine
                    : earth
                "
              />
              <span>{{ card.attribute }}</span>
            </div>
            <div>
              <img src="../assets/swords.png" />
              <span>{{ card.atk }}</span>
            </div>
            <div>
              <img src="../assets/shield.png" />
              <span>{{ card.def }}</span>
            </div>
          </div>

          <div
            v-if="card.type.includes('Spell') || card.type.includes('Trap')"
            class="informationsWrapper"
          >
            <div>
              <img
                :src="
                  card.type == 'Spell Card'
                    ? spellCardPath
                    : card.type == 'Trap Card'
                    ? trapCardPath
                    : monsterCardPath
                "
                alt="type of card"
              />
              <span>{{
                card.type == "Spell Card"
                  ? "Spell Card"
                  : card.type == "Trap Card"
                  ? "Trap Card"
                  : "Monster Card"
              }}</span>
            </div>
            <div>
              <img
                :src="
                  card.race == 'Normal'
                    ? normal
                    : card.race == 'Continuous'
                    ? continous
                    : card.race == 'Equip'
                    ? equip
                    : card.race == 'Ritual'
                    ? ritual
                    : card.race == 'Field'
                    ? field
                    : card.race == 'Quick-Play'
                    ? quickplay
                    : card.race == 'Normal'
                    ? normal
                    : card.race == 'Continuous'
                    ? continous
                    : counter
                "
                alt="card race"
              />
              <span>{{ card.race }}</span>
            </div>
          </div>

          <div class="learnMore">
            <button @click="navigateToDetails(card.name)">Card details</button>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <ul v-if="store.state.galleryActive" class="card__wrapperGallery">
    <li
      class="card__card"
      v-for="card in searchByNameOrDescription.slice(startPoint, currentPage)"
      :key="card.id"
    >
      <div class="uniqueCard">
        <div class="uniqueCard__image--wrapper">
          <img @click="navigateToDetails(card.name)" :src="card.card_images[0].image_url" alt="cardImage" />
        </div>

        <div class="uniqueCard__informations--wrapper">
          <div class="cardName">
            <h2>{{ card.name }}</h2>
          </div>
          <div class="favs">
            <img
              class="default"
              @click="addToFavs(card)"
              :src="store.state.favList.includes(card.name) ? Fav : notFav"
            />
          </div>
        </div>
      </div>
    </li>
  </ul>

  <section class="pagination">
    <div @click="pagesToStart" class="firstPage moveFar">
      <img src="../assets/firstPage.png" />
    </div>
    <div @click="prevPage" class="Prev moveLess">
      <img src="../assets/prev.png" />
    </div>
    <div class="currentPage pages activePage">
      {{ activePage }}
    </div>
    <div @click="nextPage" class="Next moveLess">
      <img src="../assets/next.png" />
    </div>
    <div @click="pagesToEnd" class="lastPage moveFar">
      <img src="../assets/lastPage.png" />
    </div>
  </section>
</template>

<script setup>
  import { computed, ref, watch } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const store = useStore();

  const props = defineProps({
    preFilterProp: {
      type: Array,
      required: true,
    },
    searchByWhat: {
      type: String,
      required: true,
    },
    searchText: {
      type: String,
      required: true,
    },
    attackFrom: {
      type: Number,
      required: false,
    },
    attackTo: {
      type: Number,
      required: false,
    },
    defenceFrom: {
      type: Number,
      required: false,
    },
    defenceTo: {
      type: Number,
      required: false,
    },
    allCards: {
      type: Boolean,
      required: false,
    },
    monsters: {
      type: Boolean,
      required: false,
    },
    spells: {
      type: Boolean,
      required: false,
    },
    traps: {
      type: Boolean,
      required: false,
    },
  });

  const pagesLength = ref(null);
  const startPoint = ref(0);
  const currentPage = ref(10);
  const activePage = ref(1);
  const gotoPage = ref(1);
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

  // pagination methods

  const nextPage = () => {
    if (activePage.value + 1 <= pagesLength.value) {
      currentPage.value += 10;
      startPoint.value += 10;
      activePage.value++;
      console.log(activePage.value);
      document.documentElement.scrollTop = 0;
    }
  };

  const prevPage = () => {
    if (currentPage.value !== 10) {
      currentPage.value -= 10;
      startPoint.value -= 10;
      activePage.value--;
      document.documentElement.scrollTop = 0;
    }
  };

  const pagesToStart = () => {
    currentPage.value = 10;
    startPoint.value = 0;
    activePage.value = 1;
    document.documentElement.scrollTop = 0;
  };
  const pagesToEnd = () => {
    activePage.value = pagesLength.value;
    startPoint.value = pagesLength.value * 10 - 10;
    currentPage.value = pagesLength.value * 10;
    document.documentElement.scrollTop = 0;
  };

  // searching methods

  const searchByNameOrDescription = computed(() => {
    let filteredArray = [];
    if (
      store.state.selectedMainCardTypes.includes("") ||
      store.state.selectedMainCardTypes.length == 0
    ) {
      filteredArray = props.preFilterProp.filter((card) => {
        if (props.searchByWhat === "true") {
          return card.name
            .toLowerCase()
            .includes(props.searchText.toLowerCase());
        } else if (props.searchByWhat === "false") {
          return card.desc
            .toLowerCase()
            .includes(props.searchText.toLowerCase());
        }
      });
      console.log(filteredArray);
    } else if (store.state.selectedMainCardTypes.includes("Monster Cards")) {
      filteredArray = props.preFilterProp.filter((card) => {
        if (props.searchByWhat === "true") {
          return (
            card.name.toLowerCase().includes(props.searchText.toLowerCase()) &&
            searchByLevelOnly(card) &&
            searchByAtributeOnly(card) &&
            searchByMonsterTypeOnly(card) &&
            searchByCardTypeOnly(card) &&
            searchByAttackAndDefenceOnly(card)
          );
        } else if (props.searchByWhat === "false") {
          return (
            card.desc.toLowerCase().includes(props.searchText.toLowerCase()) &&
            searchByLevelOnly(card) &&
            searchByAtributeOnly(card) &&
            searchByMonsterTypeOnly(card) &&
            searchByCardTypeOnly(card) &&
            searchByAttackAndDefenceOnly(card)
          );
        }
      });
    } else if (store.state.selectedMainCardTypes.includes("Spell Cards")) {
      filteredArray = props.preFilterProp.filter((card) => {
        if (props.searchByWhat === "true") {
          return (
            card.name.toLowerCase().includes(props.searchText.toLowerCase()) &&
            searchBySpellOnly(card) &&
            card.type.toLowerCase().includes("spell")
          );
        } else if (props.searchByWhat === "false") {
          return (
            card.desc.toLowerCase().includes(props.searchText.toLowerCase()) &&
            searchBySpellOnly(card) &&
            card.type.toLowerCase().includes("spell")
          );
        }
      });
    } else if (store.state.selectedMainCardTypes.includes("Trap Cards")) {
      filteredArray = props.preFilterProp.filter((card) => {
        if (props.searchByWhat === "true") {
          return (
            card.name.toLowerCase().includes(props.searchText.toLowerCase()) &&
            searchByTrapOnly(card) &&
            card.type.toLowerCase().includes("trap")
          );
        } else if (props.searchByWhat === "false") {
          return (
            card.desc.toLowerCase().includes(props.searchText.toLowerCase()) &&
            searchByTrapOnly(card) &&
            card.type.toLowerCase().includes("trap")
          );
        }
      });
    }

    pagesLength.value = Math.ceil(filteredArray.length / 10);
    return store.state.ByAttackAscending
      ? filteredArray.sort((cardA, cardB) => cardA.atk - cardB.atk)
      : store.state.ByAttackDescending
      ? filteredArray.sort((cardA, cardB) => cardA.atk - cardB.atk).reverse()
      : store.state.ByDefenceAscending
      ? filteredArray.sort((cardA, cardB) => cardA.def - cardB.def)
      : store.state.ByDefenceDescending
      ? filteredArray.sort((cardA, cardB) => cardA.def - cardB.def).reverse()
      : filteredArray;
  });

  const searchByLevelOnly = (card) => {
    const selectedLevelsArray = Array.from(store.state.selectedLevels);
    const levelsArrayLength = selectedLevelsArray.length;
    const preSelectedLevels = Array.from(store.state.preSelectedLevels);

    if (levelsArrayLength === 0) {
      return (
        card.type.includes("Monster") &&
        preSelectedLevels.some((level) => card.level.toString() == level)
      );
    } else {
      return (
        card.type.includes("Monster") &&
        selectedLevelsArray.some((level) => card.level.toString() == level)
      );
    }
  };

  const searchByAtributeOnly = (card) => {
    const selectedAtributesArray = Array.from(store.state.selectedAtributes);
    const atributesArrayLength = selectedAtributesArray.length;
    const preSelectedAtributes = Array.from(store.state.preSelectedAtributes);

    if (atributesArrayLength === 0) {
      return (
        card.type.includes("Monster") &&
        preSelectedAtributes.some((atribute) =>
          card.attribute.includes(atribute)
        )
      );
    } else {
      return (
        card.type.includes("Monster") &&
        selectedAtributesArray.some((atribute) =>
          card.attribute.includes(atribute)
        )
      );
    }
  };

  const searchByMonsterTypeOnly = (card) => {
    const selectedMonstersArray = Array.from(store.state.selectedMonsters);
    const monstersArrayLength = selectedMonstersArray.length;
    const preSelectedMonstersArray = Array.from(
      store.state.preSelectedMonsters
    );

    if (monstersArrayLength === 0) {
      return (
        card.type.includes("Monster") &&
        preSelectedMonstersArray.some((type) => card.race.includes(type))
      );
    } else {
      return (
        card.type.includes("Monster") &&
        selectedMonstersArray.some((type) => card.race.includes(type))
      );
    }
  };

  const searchByCardTypeOnly = (card) => {
    const selectedCardTypesArray = Array.from(store.state.selectedCardTypes);
    const selectedCardTypesLength = selectedCardTypesArray.length;
    const preSelectedCardTypesArray = Array.from(
      store.state.preSelectedCardTypes
    );

    if (selectedCardTypesLength === 0) {
      return (
        card.type.includes("Monster") &&
        preSelectedCardTypesArray.some((type) => card.type.includes(type))
      );
    } else {
      return (
        card.type.includes("Monster") &&
        selectedCardTypesArray.some((type) => card.type.includes(type))
      );
    }
  };

  const searchByTrapOnly = (card) => {
    const selectedRacesArray = Array.from(store.state.selectedTrapTypes);
    const selectedRacesLength = selectedRacesArray.length;
    const preSelectedRacesArray = Array.from(store.state.preSelectedTrapTypes);

    if (selectedRacesLength === 0) {
      return (
        card.type.includes("Trap") &&
        preSelectedRacesArray.some((type) => card.race.includes(type))
      );
    } else {
      return (
        card.type.includes("Trap") &&
        selectedRacesArray.some((type) => card.race.includes(type))
      );
    }
  };

  const searchBySpellOnly = (card) => {
    const selectedRacesArray = Array.from(store.state.selectedSpellTypes);
    const selectedRacesLength = selectedRacesArray.length;
    const preSelectedRacesArray = Array.from(store.state.preSelectedSpellTypes);

    if (selectedRacesLength === 0) {
      return (
        card.type.includes("Spell") &&
        preSelectedRacesArray.some((type) => card.race.includes(type))
      );
    } else {
      return (
        card.type.includes("Spell") &&
        selectedRacesArray.some((type) => card.race.includes(type))
      );
    }
  };

  const searchByAttackAndDefenceOnly = (card) => {
    return (
      card.atk >= store.state.attackFrom &&
      card.atk <= store.state.attackTo &&
      card.def >= store.state.defenceFrom &&
      card.def <= store.state.defenceTo
    );
  };

  const addToFavs = (name) => {
    store.commit("addToFavs", name);
  };

  const navigateToDetails = (name) => {
  router.push({ name: 'name', params: { cardName: name } });
};


  watch(
    () => props.searchText,
    () => {
      startPoint.value = 0;
      currentPage.value = 10;
      activePage.value = 1;
    }
  );

  watch(
    [
      () => props.monsters,
      () => props.spells,
      () => props.allCards,
      () => props.traps,
    ],
    () => {
      gotoPage.value = 1;
      startPoint.value = 0;
      currentPage.value = 10;
      activePage.value = 1;
    }
  );
</script>

<style lang="scss">
  @import "@/assets/_variables.scss";

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    background-color: #ececec;
  }

  .card__wrapperGallery {
    display: flex;
    flex-flow: row wrap;
    gap: 1.25rem;
    justify-content: center;
    padding-bottom: 1.25rem;

    .card__card {
      display: flex;
      width: 45%;
      justify-content: center;

      .uniqueCard {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: start;

        .uniqueCard__image--wrapper {
          width: 100%;

          img {
            height: 100%;
            width: 100%;
          }
        }

        .uniqueCard__informations--wrapper {
          width: 100%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;

          .cardName {
            width: fit-content;
            h2 {
              font-size: 1rem;
              text-align: left;
              padding: 1vh 0;
            }
          }

          .favs {
            width: fit-content;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            align-items: flex-start;

            img {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }

  // list

  .card_wrapperList {
    display: flex;
    flex-flow: column nowrap;
    width: 90%;
    margin: 0 auto;

    .cardList {
      .uniqueCardList {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        gap: 1.25rem;
        padding-bottom: 2.25rem;

        .uniqueCard__image--wrapper {
          img {
            width: 10.3125rem;
            height: 14.125rem;
          }
        }

        .uniqueCard__informations--wrapper {
          display: flex;
          flex-flow: column wrap;

          .favs {
            display: flex;
            justify-content: flex-end;
            padding-bottom: 0.75rem;

            img {
              width: 2.1875rem;
              height: 2.1875rem;
            }
          }

          .cardName {
            padding-bottom: 1.88rem;

            h2 {
              font-size: 1rem;
              text-align: left;
            }
          }

          .informationsWrapper {
            display: flex;
            flex-flow: row wrap;
            padding-bottom: 0.88rem;
            gap: 10px;

            div {
              width: 45%;
              padding-bottom: 1rem;

              img {
                width: 1.2375rem;
                height: 1.275rem;
              }

              span {
                padding-left: 0.3rem;
              }
            }
          }

          .learnMore {
            margin: 0 auto;
          }

          button {
            background-color: #005db8;
            color: white;
            padding: 0.5625rem 1.875rem 0.625rem 1.875rem;
            border-radius: 1.25rem;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 0.38rem;
    padding-bottom: 1.25rem;

    .activePage {
      background-color: #2d61af;
      color: white;
    }

    .moveFar {
      width: 3.6875rem;
      padding: 0.3125rem 0.9375rem;
      border: 1px solid #d1d0d0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }

    .moveLess {
      width: 3.6875rem;
      padding: 0.3125rem 0.9375rem;
      border: 1px solid #d1d0d0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }

    .pages {
      width: 2.625rem;
      padding: 0.3125rem 0.9375rem;
      border: 1px solid #d1d0d0;
      font-size: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
  }
</style>
