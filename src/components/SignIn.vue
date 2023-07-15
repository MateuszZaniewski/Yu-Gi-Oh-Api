<template>
    <main>
        <div class="mainText">
            <h1>Yu-Gi-Oh!</h1>
        </div>
        <div class="inputFields">
            <input id="email" type="text" placeholder="EMAIL" v-model="email"/>
            <input id="password" type="password" placeholder="PASSWORD" v-model="password"/>
            <p id="error" v-if="errorMsg">{{ errorMsg }}</p>
            <button id="submit" @click="register">Log in</button>
        </div>
        <span class="passwordRecovery"><a>Forgot password?</a></span>
        <!-- <div class="googleLogin">
            <button @click="signInWithGoogle">Sign in with Google</button>
            <p><button @click="handleSignOut">Logout</button></p>
        </div> -->

        <div class="createNewAccount">
            <button id="create" >Create new account</button>
        </div>

        <div class="backgroundImages">
            <img id="ankh" src="../assets/signInPage/ankh-removed.png" />
            <img id="eye" src="../assets/signInPage/eye-removed.png" />
            <img id="neclace" src="../assets/signInPage/neclace-removed.png" />
            <img id="puzzle" src="../assets/signInPage/puzzle-removed.png" />
            <img id="ring" src="../assets/signInPage/ring-removed.png" />
            <img id="rod" src="../assets/signInPage/rod-removed.png" />
            <img id="scale" src="../assets/signInPage/scale-removed.png" />
        </div>
    </main>
    
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
    import { useRouter } from 'vue-router';

    
    const email = ref('')
    const password = ref('')
    const errorMsg = ref()
    const router = useRouter()
    
    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log('Zalogowano pomyślnie')
            router.push('/Search')
        })
        .catch((error) => {
            console.log(error)
            switch (error.code){
                case 'auth/invalid-email':
                    errorMsg.value = 'Invalid email'
                    break;
                case 'auth/user-not-found':
                    errorMsg.value = 'User not found'
                    break;
                case 'auth/wrong-password':
                    errorMsg.value = 'Incorrenct Password'
                    break;
                default :
                    errorMsg.value = 'Email or password are incorrect'
                    break;
            }
        })

        setTimeout(() => {
            errorMsg.value = ''
        }, 3000);
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
    
    const handleSignOut = () => {
        signOut(getAuth()).then(() => {
            router.push('/signin')
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
    position: relative;
    
}

.mainText {
    text-align: center;
    padding-top: 30%;

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

        #email, #password, #submit {
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
            margin-top: 8rem;
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
    padding-top: 10rem;

    button {
        padding: 0.5rem 1.25rem 0.625rem 1.25rem;
        border-radius: 1.25rem;
        border: 1px solid #2D61AF;
        background: #FFF;
    }
}
.backgroundImages{

    #puzzle{
        position: absolute;
        top: 22%;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 1;
        animation: rotateHorizontal 4s infinite linear;
        transform-style: preserve-3d;
    }

    @keyframes rotateHorizontal {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }

    #ankh {
        position: absolute;
        top: 0%;
        left: 5%;
        margin: auto;
        z-index: 1;
        rotate: -25deg;
        animation: rotateAnkh 4s infinite linear;
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
    }

    #rod {
        position: absolute;
        top: 30%;
        left: 10%;
        margin: auto;
        z-index: 1;
    }

    #neclace {
        position: absolute;
        top: 30%;
        right: 10%;
        margin: auto;
        z-index: 1;
        rotate: 15deg;
    }

    #scale {
        position: absolute;
        bottom: 20%;
        left: 10%;
        margin: auto;
        z-index: 1;
    }

    #ring {
        position: absolute;
        bottom: 23%;
        right: 10%;
        margin: auto;
        z-index: 1;
        rotate: 12deg;
    }


}
</style>