<template>
  <div class="todo-list">
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      type="text"
      placeholder="Add a new to-do"
    />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.done {
  text-decoration: line-through;
  color: gray;
}

button {
  background: red;
  color: white;
  border: none;
  padding: 2px 5px;
  cursor: pointer;
}
</style>
