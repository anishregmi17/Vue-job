<script setup>
import { ref } from "vue";

const name = ref("Register Form");
const formname = ref("");
</script>

<template>
  <h1>{{ name }}</h1>
  <form @submit.prevent="addTask">
    <label for="formname">Full Name : </label>
    <input type="text" id="formname" name="formname" v-model="formname" />
    <br />
    <label for="formname">Full Name : </label>
    <input type="text" id="formname" name="formname" v-model="formname" />
  </form>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
