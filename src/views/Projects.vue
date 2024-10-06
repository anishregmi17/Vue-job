<template>
  <section class="projects">
    <h1>My Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }} - <a :href="project.link" target="_blank">View</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: "Project 1", link: "https://example.com" },
        { id: 2, name: "Project 2", link: "https://example.com" },
      ],
    };
  },
  name: "Projects",
};
</script>

<style scoped>
.projects {
  padding: 20px;
}
</style>
