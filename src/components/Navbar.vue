<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px;
}
.navbar a {
  color: white;
  text-decoration: none;
}
</style>
