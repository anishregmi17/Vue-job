<template>
  <section class="contact">
    <h1>Contact Me</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input v-model="formData.name" id="name" required />

      <label for="email">Email:</label>
      <input v-model="formData.email" id="email" type="email" required />

      <label for="message">Message:</label>
      <textarea v-model="formData.message" id="message" required></textarea>

      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Message sent!");
      // Here you could add logic to send the form data to a server
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    },
  },
  name: "Contact",
};
</script>

<style scoped>
.contact {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin: 10px 0 5px;
}
button {
  margin-top: 10px;
}
</style>
