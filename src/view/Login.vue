<template>
  <div class="h-screen flex justify-center items-center bg-pink-100">
    <div class="bg-white p-6 rounded-xl w-96 shadow">

      <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>

      <input class="w-full border p-2 mb-3 rounded" placeholder="Email" />
      <input class="w-full border p-2 mb-3 rounded" placeholder="Password" />

      <button
        @click="login"
        class="w-full bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>

      <router-link to="/home" class="text-pink-500">
          show information before login
        </router-link>

      <p class="text-center mt-3">
        No account?
        <router-link to="/register" class="text-pink-500">
          Register
        </router-link>
      </p>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  // fake login (later you connect backend)
  router.push('/home') // 👈 go to website after login
}
</script>