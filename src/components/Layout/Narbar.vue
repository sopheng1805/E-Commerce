<template>
    <header>
        <div class="w-full flex items-center bg-pink-200 px-4 py-2 md:px-8 lg:px-10 position-sticky z-index">
            
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
            <div class="font-bold pl-20 gap-5 flex cursor-pointer">
                <img src="/src/assets/image/icons/search.svg" alt="">
                <img src="/src/assets/image/icons/person.svg" alt="">
                <img src="/src/assets/image/icons/bag.svg" alt="">
                <button class="shadow-xl px-3 py-1 hover:border-3 rounded-2xl border cursor-pointer">LogIn</button>
                <button class="shadow-xl px-3 py-1 hover:border-3 rounded-2xl border cursor-pointer">Register</button>
            </div>
        </div>
    </header>
    <Banner/>
    <Card/>
    <Rating/>
    <Footer/>
</template>

<script setup>
import Banner from '../banner/Banner.vue';
import Card from '../categories/Card.vue';
import Rating from '../categories/Rating.vue';
import Footer from './Footer.vue';

    const menu = [
        {link:"/home",name:"Home"},
        {link:"/shop",name:"Shop"},
        {link:"/categories",name:"Categories"},
        {link:"/contect",name:"Contect"}
    ]
</script>