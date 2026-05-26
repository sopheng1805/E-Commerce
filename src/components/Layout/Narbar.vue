<template>
  <header class="sticky top-0 z-50 bg-pink-200">

    <!-- LOADING SCREEN -->
    <div v-if="isLoading"
      class="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center">
      <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h4 class="text-white text-xl mt-4">Loading...</h4>
    </div>

    <!-- NAVBAR -->
    <div class="w-full flex items-center px-4 py-2 md:px-8 lg:px-10 shadow-lg">

      <!-- LOGO -->
      <div class="flex items-center gap-3 cursor-pointer">
        <img class="w-12 h-12 rounded-full"
          src="/src/assets/image/hero/logo.png"
          alt="logo"
        />
        <span class="text-2xl font-bold">GENZ-BEUTY</span>
      </div>

      <!-- MENU -->
      <ul class="hidden lg:flex gap-6 ml-10">
        <li v-for="item in menu" :key="item.name">
          <router-link
            :to="item.link"
            class="text-lg font-semibold hover:text-blue-900 hover:underline"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <!-- ICONS + AUTH -->
      <div class="ml-auto flex items-center gap-5">

        <router-link to="/search">
          <img src="/src/assets/image/icons/search.svg" alt="search" />
        </router-link>

        <router-link to="/profile">
          <img src="/src/assets/image/icons/person.svg" alt="profile" />
        </router-link>

        <router-link to="/cart">
          <img src="/src/assets/image/icons/bag.svg" alt="cart" />
        </router-link>

        <router-link
          to="/login"
          class="px-3 py-1 border rounded-xl shadow hover:border-black"
        >
          Login
        </router-link>

        <router-link
          to="/register"
          class="px-3 py-1 border rounded-xl shadow hover:border-black"
        >
          Register
        </router-link>

      </div>
    </div>
  </header>

  <!-- MAIN PAGE CONTENT (IMPORTANT) -->
  <main>
    <Banner />
    <Card />
    <Rating />
    <Footer />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import Banner from '../banner/Banner.vue'
import Card from '../categories/Card.vue'
import Rating from '../categories/Rating.vue'
import Footer from './Footer.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const menu = [
  { link: "/home", name: "Home" },
  { link: "/shop", name: "Shop" },
  { link: "/categories", name: "Categories" },
  { link: "/contact", name: "Contact" }
]
</script>