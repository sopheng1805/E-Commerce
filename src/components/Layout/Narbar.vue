<template>
    <header class="sticky top-0 z-index bg-pink-200">
        <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center">
            <!-- Spinner -->
            <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

            <!-- Text -->
            <h4 class="text-white text-xl mt-4">Loading...</h4>
        </div>

        <div class="w-full flex items-center bg-pink-200 px-4 py-2 md:px-8 lg:px-10 shadow-lg rounded-4xl">

            <!-- logo -->
            <div class="flex justify-start items-center gap-2 pl-19 pr-60">
                <img class="w-15 h-15 rounded-[50%]" src="/src/assets/image/hero/logo.png" alt="">
                <a href="" class="text-black lg:text-3xl md:text-3xl text-2xl font-bold">GENZ-BEUTY</a>
            </div>

            <div class="gap-16">
                <ul class="hidden items-center lg:flex pr-20">
                    <li class="px-5 py-2 rounded-xl hover:underline cursor-pointer
                    text-xlx font-semibold" v-for="item in menu" :key="item.name">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <!-- menu -->
            <div class="font-bold pl-20 gap-5 flex cursor-pointer items-center justify-center">
                <a href=""><img src="/src/assets/image/icons/search.svg" alt=""></a>
                <a href=""><img src="/src/assets/image/icons/person.svg" alt="">
                    <router-link to=""></router-link>
                </a>
                <a href=""><img src="/src/assets/image/icons/bag.svg" alt=""></a>

                <button><router-link to="/login"
                        class="shadow-xl px-3 py-1 hover:border-3 rounded-2xl border cursor-pointer">
                        Login
                    </router-link>
                </button>

                <button><router-link to="/register"
                        class="shadow-xl px-3 py-1 hover:border-3 rounded-2xl border cursor-pointer">
                        Register
                    </router-link>
                </button>
            </div>
        </div>
    </header>
    <Banner />
    <Card />
    <Rating />
    <Footer />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Banner from '../banner/Banner.vue';
import Card from '../categories/Card.vue';
import Rating from '../categories/Rating.vue';
import Footer from './Footer.vue';

const isLoading = ref(true)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 1000) // 3 seconds loading
})

const menu = [
    { link: "/home", name: "Home" },
    { link: "/shop", name: "Shop" },
    { link: "/categories", name: "Categories" },
    { link: "/contect", name: "Contect" }
]

</script>