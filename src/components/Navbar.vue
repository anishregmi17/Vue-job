<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <a href="#">My Portfolio</a>
    </div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
    </ul>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/your-profile" target="_blank">
        <font-awesome-icon icon="linkedin" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
}

.logo a {
  font-size: 1.5rem;
  color: #ed0e0e;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #f1efef;
  text-decoration: none;
  font-size: 1rem;
}

.social-icons a {
  color: #831c1c;
  margin-left: 1rem;
  font-size: 1.2rem;
}
</style>
