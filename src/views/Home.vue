<template>
  <section class="home">
    <h1>Hi, I'm Anish Regmi!</h1>
    <p>Welcome to my portfolio website.</p>
    <router-link to="/projects">Check out my projects</router-link>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
