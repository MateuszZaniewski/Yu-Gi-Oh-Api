<template>
<h1>Create an accout</h1>
<p><input type="text" placeholder="email" v-model="email"/></p>
<p><input type="text" placeholder="password" v-model="password"/></p>
<p><button @click="register">Submit</button></p>
<p><button @click="signInWithGoogle">Sign in with Google</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log('Zalogowano pomyślnie')
        router.push('/Search')
    })
    .catch((error) => {
        console.log(error)
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