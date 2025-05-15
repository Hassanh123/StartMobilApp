
<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">E-mailadres:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Wachtwoord:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Inloggen</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Hier kun je jouw loginlogica toevoegen
      console.log('Inloggen met:', this.email, this.password);
    },
  },
}
</script>

<style scoped>
.login-page {
  padding: 20px;
}
.login-page form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>