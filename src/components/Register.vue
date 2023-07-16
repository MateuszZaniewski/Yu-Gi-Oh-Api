<!-- <template>
<h1>Create an accout</h1>
<p><input type="text" placeholder="email" v-model="email"/></p>
<p><input type="text" placeholder="password" v-model="password"/></p>
<p><button @click="register">Submit</button></p>
<p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template> -->

<template>
    <main>
            <img id="ankh" src="../assets/signInPage/ankh-removed.png" />
            <img id="eye" src="../assets/signInPage/eye-removed.png" />
            <img id="neclace" src="../assets/signInPage/neclace-removed.png" />
            <img id="puzzle" src="../assets/signInPage/puzzle-removed.png" />
            <img id="ring" src="../assets/signInPage/ring-removed.png" />
            <img id="rod" src="../assets/signInPage/rod-removed.png" />
            <img id="scale" src="../assets/signInPage/scale-removed.png" />
        <div class="mainText">
            <h1>Yu-Gi-Oh!</h1>
        </div>
        <div class="inputFields">
            <input id="email" type="text" placeholder="EMAIL" v-model="email"/>
            <input id="password" type="password" placeholder="PASSWORD" v-model="password"/>
            <p id="error" v-if="errorMsg">{{ errorMsg }}</p>
            <button id="submit" @click="register">Create an account</button>
        </div>
        <span class="passwordRecovery"><a>Forgot password?</a></span>
        <!-- <div class="googleLogin">
            <button @click="signInWithGoogle">Sign in with Google</button>
            <p><button @click="handleSignOut">Logout</button></p>
        </div> -->

        <div class="createNewAccount">
            <button @click="goToRegisterPage" id="create" >Create new account</button>
        </div>
    </main>
    
    </template>



<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
const errorMsg = ref()
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Zalogowano pomyślnie')
        router.push('/Search')
    })
    .catch((error) => {
            console.log(error)
            switch (error.code){
                case 'auth/email-already-in-use':
                    errorMsg.value = 'Email is already in use'
                    break;
                case 'auth/invalid-email':
                    errorMsg.value = 'Email provided is not in valid format'
                    break;
                case 'auth/weak-password':
                    errorMsg.value = 'Password shoud be at least 6 characters long'
                    break;
            }
        })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user)
        router.push('/Search')
    })
    .catch((error) => {
        console.log(error)
    })
}
;
</script>

<style lang="scss" scoped >

@import "@/assets/_variables.scss";

* {
    background-color: transparent;
    
}

main {
    background-color: #fff;
    height: 100vh;
    max-height: 800px;
    position: relative;
    
}

.mainText {
    text-align: center;
    padding-top: 5vh;

     h1 {
        color: #FFF;
        text-align: center;
        font-family: 'yugioh';
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-shadow: black 1px 0 10px;
        position: relative;
        z-index: 99;
     }
}
.inputFields {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;

        #email, #password, #submit, #error {
            width: 60%;
            margin: 0 auto;
            font-size: 0.875rem;
            margin-bottom: 1rem;
            height: 2.7rem;
            border-radius: 0.6rem;
            position: relative;
            z-index: 99;
        }

        #email {
            margin-top: 12rem;
            text-indent: 1rem;
        }

        #password {
            text-indent: 1rem;
        }

        #submit {
            border-radius: 1.25rem;
            background: #2D61AF;
            border: none;
        }

        #error {
            padding: 0.5rem 0;
        }
     }

     .passwordRecovery {
        display: flex;
        justify-content: center;
        a {
            text-align: center;
            position: relative;
            z-index: 99;
        }
        
    }

.createNewAccount {

    display: flex;
    justify-content: center;
    padding-top: 4rem;

    button {
        padding: 0.5rem 1.25rem 0.625rem 1.25rem;
        border-radius: 1.25rem;
        border: 1px solid #2D61AF;
        background: #FFF;
    }
}

    #puzzle{
        position: absolute;
        top: 15%;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1;
    }

    #ankh {
        position: absolute;
        top: 0%;
        left: 5%;
        margin: auto;
        z-index: 1;
        rotate: -25deg;
        animation: rotateAnkh 10s infinite linear;
    }

    @keyframes rotateAnkh {
        0% {
            top: 0%;
            left: 5%;
        }

        25% {
            top: 5%;
            left: 10%;
        }

        50% {
            top: 7%;
            left: 13%;
        }

        75% {
            top: 5%;
            left: 7%;
        }

        100% {
            top: 0%;
            left: 5%;
        }
    }

    #eye {
        position: absolute;
        top: 3%;
        right: 5%;
        margin: auto;
        z-index: 1;
        animation: rotateEye 10s infinite linear;
    }


    @keyframes rotateEye {
        0% {
            top: 3%;
            right: 5%;
        }

        25% {
            top: 5%;
            right: 10%;
        }

        50% {
            top: 12%;
            right: 13%;
        }

        75% {
            top: 10%;
            right: 7%;
        }

        100% {
            top: 3%;
            right: 5%;
        }
    }



    #rod {
        position: absolute;
        top: 30%;
        left: 10%;
        margin: auto;
        z-index: 1;
        animation: rotateRod 10s infinite linear;
    }


    @keyframes rotateRod {
        0% {
            top: 30%;
            left: 10%;
        }

        25% {
            top: 38%;
            left: 15%;
        }

        50% {
            top: 41%;
            left: 19%;
        }

        75% {
            top: 36%;
            left: 13%;
        }

        100% {
            top: 30%;
            left: 10%;
        }
    }




    #neclace {
        position: absolute;
        top: 30%;
        right: 10%;
        margin: auto;
        z-index: 1;
        rotate: 15deg;
        animation: rotateNeclace 10s infinite linear;
    }


    @keyframes rotateNeclace {
        0% {
            top: 30%;
            right: 10%;
        }

        25% {
            top: 38%;
            right: 7%;
        }

        50% {
            top: 41%;
            right: 13%;
        }

        75% {
            top: 36%;
            right: 3%;
        }

        100% {
            top: 30%;
            right: 10%;
        }
    }


    #scale {
        position: absolute;
        bottom: 16%;
        left: 4%;
        margin: auto;
        z-index: 1;
        animation: rotateScale 10s infinite linear;
    }


    @keyframes rotateScale {
        0% {
            bottom: 16%;
            left: 4%;
        }

        25% {
            bottom: 12%;
            left: 8%;
        }

        50% {
            bottom: 4%;
            left: 13%;
        }

        75% {
            bottom: 9%;
            left: 10%;
        }

        100% {
            bottom: 16%;
            left: 4%;
        }
    }

    #ring {
        position: absolute;
        bottom: 25%;
        right: 12%;
        margin: auto;
        z-index: 1;
        rotate: 12deg;
        animation: rotateRing 10s infinite linear;
    }


    @keyframes rotateRing {
        0% {
            bottom: 25%;
            right: 12%;
        }

        25% {
            bottom: 12%;
            right: 8%;
        }

        50% {
            bottom: 4%;
            right: 13%;
        }

        75% {
            bottom: 9%;
            right: 10%;
        }

        100% {
            bottom: 25%;
            right: 12%;
        }
    }

</style>