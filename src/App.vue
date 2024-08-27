<template>
  <div id="app">
    <h1>Vue.js To-Do List</h1>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
