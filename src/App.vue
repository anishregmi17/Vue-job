<script>
export default {
  setup() {
    const name = "Anish";
    return {
      name,
    };
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
