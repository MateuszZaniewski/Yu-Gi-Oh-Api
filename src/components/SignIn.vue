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
            <input @keyup.enter.native="register" id="password" type="password" placeholder="PASSWORD" v-model="password"/>
            <p id="error" v-if="errorMsg">{{ errorMsg }}</p>
            <button type="submit" id="submit" @click="register">Log in</button>
        </div>
        <span class="passwordRecovery"><a>Forgot password?</a></span>
        <!-- <div class="googleLogin">
            <button @click="signInWithGoogle">Sign in with Google</button>
            <p><button @click="handleSignOut">Logout</button></p>
        </div> -->

        <div class="breakspace">
            <div class="breakline"></div>
            <span class="breakSpan">or</span>
            <div class="breakline"></div>
        </div>

        <div class="signInWithGoogle">
            <div @click="signInWithGoogle" class="button">
                <img src="../assets/signInPage/google.png" class="bcgImage" />
                <span>Continue with Google</span>
            </div>
        </div>

        <div class="signInWithFacebook">
            <div class="button">
                <img src="../assets/signInPage/facebook.png" class="bcgImage" />
                <span @click="signInWithFacebook">Continue with Facebook</span>
            </div>
        </div>


        <div class="createNewAccount">
            <button @click="goToRegisterPage" id="create" >Create new account</button>
        </div>
    </main>
    
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider } from 'firebase/auth'
    import { useRouter } from 'vue-router';

    
    const email = ref('')
    const password = ref('')
    const errorMsg = ref()
    const router = useRouter()

    const signInWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider()
    await signInWithPopup(getAuth(), provider);
    // Sign-in successful, handle the user data if needed
    then(
        console.log(auth.currentUser)
    )
    
  } catch (error) {
    console.error('Error signing in with Facebook:', error);
  }
};


    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log(data)
            console.log('Name', data.displayName)
            console.log('Email', data.email)
            // user id : data.uid
            // user name : data.displayName
            // user email : data.email
            console.log('Zalogowano pomyślnie')
            router.push('/Search')
        })
        .catch((error) => {
            console.log(error)
            switch (error.code){
                case 'auth/invalid-email':
                    errorMsg.value = 'Email or password are incorrect'
                    break;
                case 'auth/user-not-found':
                    errorMsg.value = 'User not found'
                    break;
                case 'auth/wrong-password':
                    errorMsg.value = 'Email or password are incorrect'
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
    signInWithRedirect(getAuth(), provider)
    .then((result) => {
        const user = result.user;
        console.log(user)
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
    };

    const goToRegisterPage = () => {
        router.push('/register')
    };


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
            width: 80%;
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
    padding-top: 2rem;

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
        animation: rotateAnkh 9s infinite linear;
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
        animation: rotateEye 9.5s infinite linear;
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
        animation: rotateNeclace 10.5s infinite linear;
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
        animation: rotateScale 11s infinite linear;
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
        animation: rotateRing 9s infinite linear;
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

.breakspace {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;

        .breakline {
            border-bottom: 1px solid black;
            width: 100%;
            margin: 0 1rem;
        }

        span {
            width: fit-content;
        }
    }

.signInWithGoogle, .signInWithFacebook {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    
    
    .button {
        border-radius: 1.25rem;
        border: 1px solid black;
        padding: 0.5rem 1.25rem;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .bcgImage {
        width: 1.375rem;
        height: 1.4375rem;
    }


}

.signInWithGoogle {
    padding: 1rem 0;

}





</style>