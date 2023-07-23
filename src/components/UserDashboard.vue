<template>

<section class="userDashboard">
    <img @click="navigateToHome" src="../assets/backArrow.png" />
    <div class="userPhoto">
        <img :src="userPhoto" />
        <h2> {{ username }} </h2>
        <div class="userNickname">
            <p>Dark Magician's best companion</p> <img :src="pen" alt="edit nickname" />
        </div>
    </div>

    <div class="userFavCards">
        <span>Your favourite cards</span>
        <div>
          <img />
          <span>Card 1</span>
          <span>Card 2</span>
          <span>Card 3</span>
          <span>Card 4</span>
        </div>
    </div>

    <div class="userDecks">
        <span>Your decks</span>
    </div>


</section>

</template>

<script setup>

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, set, ref as storageRef } from 'firebase/database'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import pen from '../assets/edit.png'
const username = ref(null)
const email = ref(null)
const userId = ref(null)
const userPhoto = ref(null)

const auth = getAuth()
const router = useRouter()

async function handleAuthStateChange() {
  try {
    // Wait for the observer to resolve with the user data or null
    const user = await new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user));
    });

    if (user) {
      // User is logged in, you can access the user data here
      username.value = user.displayName;
      email.value = user.email;
      userId.value = user.uid;
      userPhoto.value = user.photoURL;

      console.log("User is logged in:", user);
    } else {
      // User is not logged in, handle this case if needed
      console.log("User is not logged in.");
    }
  } catch (error) {
    // Handle any errors that may occur during the authentication state change
    console.error("Error during authentication state change:", error);
  }
}

// Call the async function to handle the authentication state change
handleAuthStateChange();


const navigateToHome = () => {
    router.push({name : "Home"})
  }

</script>


<style lang="scss" scoped>

.userDashboard {
    height: 100vh;
    background-color: white;
    border: 1px solid #2D61AF;

    .userPhoto {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        padding-top: 5rem;

        img {
            border-radius: 50%;
        }

        h2 {
            padding-top: 1rem;
            color: #2D61AF;
        }

        .userNickname {
            display: flex;
            align-items: center;
            padding-top: 0.5rem;
            gap: .2rem;

            p {
                font-size: 0.8rem;
                color: #808080;
                padding: 0;
            }

            img {
                height: 20px;
                width: 20px;
            }
        }
    }


    .userFavCards {
        padding: 1rem 1rem;
    }
}

</style>