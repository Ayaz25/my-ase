<script setup>
  import InputText from 'primevue/inputtext';
  import {Button} from "primevue";
  import {ref, defineEmits} from "vue";
  import {Toast} from "primevue";
  import {useToast} from "primevue/usetoast";

  const userName = ref('')
  const toast = useToast()
  /*eslint-disable*/

  const emit = defineEmits(['showHomePage', 'setUserName'])

  function goToHomeWithUserName() {
    if (userName.value === '') {
      toast.add({severity: 'info', summary: 'Info', detail: 'Bitte geben Sie Ihre Name Ein', life: 3000 })
    }
    else {
      emit('showHomePage', true )
      emit('setUserName', userName.value)
    }
  }

</script>

<template>
  <div>
    <h2 class="title"> Arbeitsstundenerfassung </h2>
    <img class="start_image" src="../assets/StartBild.jpg"/>
    <h4> Erfasse deine Arbeitszeiten mühelos <br> und behalte stets den Überblick </h4>
    <InputText v-model="userName" placeholder="Username" class="user_input" type="text" />
    <div>
      <Toast position="top-center" style="width: 80%;"/>
      <Button @click="goToHomeWithUserName" label="Start" class="start_button" />
    </div>
  </div>
  
</template>

<style scoped>
  .title {
    margin-bottom: 3rem;
  }
  .start_image {
    width: 20rem;
  }
  .user_input {
    margin-top: 2rem;
    width: 16rem;
  }
  .start_button {
    margin-top: 2rem;
    width: 10rem;
    color: black;
    background-color: #6DB6D9 !important;
  }
  .start_button:hover {
    background-color: #2ca3dc !important;
  }
</style>
