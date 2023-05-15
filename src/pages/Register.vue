<template>
    <form @submit.prevent="registerUser">
      <div>
        <label for="userName">Username:</label>
        <input type="text" id="userName" v-model="userName" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </template>

  <script>
  import { ref } from 'vue';
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  export default {
    setup() {
      const userName = ref('')
      const email = ref('')
      const password = ref('')
      const error = ref(null)

      const store = useStore();
      const router = useRouter();
      const  registerUser = async () => {
        // Handle registration logic here
        try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          userName: userName.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
            }
      }

      return {userName,email,password,registerUser}
    }
  }
  </script>

  <style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin-top: 10px;
    font-weight: bold;
  }

  input {
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    width: 300px;
  }

  button {
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: #0077cc;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005fa3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .error-message {
    color: red;
    margin-top: 5px;
    font-size: 14px;
  }
  </style>

