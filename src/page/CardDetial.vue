<script setup>
import { useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()

const productId = parseInt(route.params.id)

const product = products.find(
  p => p.id === productId
)
</script>

<template>
  <div class="p-10">

    <div
      class="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6"
    >

      <img
        :src="product.image"
        class="w-full h-[400px] object-cover rounded-lg"
      />

      <h1 class="text-4xl font-bold mt-5">
        {{ product.title }}
      </h1>

      <p class="text-gray-600 mt-3">
        {{ product.description }}
      </p>

      <h2 class="text-2xl text-pink-500 font-bold mt-4">
        ${{ product.price }}
      </h2>

    </div>

  </div>
</template>