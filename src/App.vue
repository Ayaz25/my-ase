<template>
  <div v-if="!showHomePage">
    <StartSite @show-home-page="goToHomePage" @set-user-name="setUserNameF"></StartSite>
  </div>
  <HomePage v-if="showHomePage" :name="userN" @go-to-start-page="goToSatrtP"></HomePage>

</template>

<script setup>
import HomePage from './components/HomePage.vue';
import StartSite from './components/StartSite.vue';
import {onMounted, ref} from "vue";

const userN = ref('')
const showHomePage = ref(false)
onMounted(() => {
  const users = Object.keys(localStorage)
  console.log(users)
  if (users.length > 0) {
    showHomePage.value = true
    userN.value = users[users.length - 1]
  }
})

function goToHomePage() {
  showHomePage.value = true
}

function setUserNameF(userName) {
  userN.value = userName
}

function goToSatrtP() {
  showHomePage.value = false
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
