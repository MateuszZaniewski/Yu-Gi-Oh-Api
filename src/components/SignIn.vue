<template>
    <main>
        <div class="mainText">
            <h1>Yu-Gi-Oh!</h1>
        </div>
    
    <p><input type="text" placeholder="email" v-model="email"/></p>
    <p><input type="text" placeholder="password" v-model="password"/></p>
    <p v-if="errorMsg">{{ errorMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in with Google</button></p>
    <p><button @click="handleSignOut">Logout</button></p>
    

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
    
}

.mainText {
    text-align: center;
    padding-top: 15%;

     h1 {
        color: #FFF;
        text-align: center;
        font-family: 'yugioh';
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-shadow: black 1px 0 10px;
     }
}


</style>