<template>
  <div class="w-full h-auto lg:px-24 md:px-6 px-4 py-10 bg-pink-200">

    <!-- title -->
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-3xl">Product List</h1>

      <button @click="showAll = !showAll" class="cursor-pointer shadow-xl rounded-xl px-3 py-2 hover:bg-pink-600 hover:text-white">
        {{ showAll ? 'Show Less' : 'View All' }}
      </button>
    </div>

    <!-- main card -->
    <div class="w-full pt-10 flex gap-8 flex-wrap">

      <!-- card -->
      <div
        v-for="item in visibleProducts"
        :key="item.id"
        class="w-full md:w-[48%] lg:w-[23%] shadow-2xl rounded-xl overflow-hidden h-[410px] bg-white"
      >

        <!-- card header -->
        <div class="w-full h-[70%]">
          <img
            class="w-full h-full object-cover"
            :src="item.image"
            :alt="item.title"
          >
        </div>

        <!-- card body -->
        <div class="px-3 py-2">
          <h1 class="font-bold text-xl">
            {{ item.title }}
          </h1>

          <p class="font-bold pt-2">
            $ {{ item.price }}
          </p>

          <!-- button -->
          <div class="flex justify-between pt-3">
            <button
              class="bg-red-500 text-white rounded-xl px-3 py-2 cursor-pointer hover:bg-red-700"
            >
              Details
            </button>

            <button
              class="bg-blue-500 text-white rounded-xl px-3 py-2 cursor-pointer hover:bg-blue-700"
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAll = ref(false)

const products = ref([
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    title: "Hydrating Face Cream",
    price: 24.99
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    title: "Vitamin C Serum",
    price: 19.99
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
    title: "Gentle Cleanser",
    price: 14.99
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050",
    title: "Aloe Vera Gel",
    price: 12.50
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524",
    title: "Sunscreen SPF 50",
    price: 21.00
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    title: "Night Repair Cream",
    price: 29.99
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    title: "Rose Water Toner",
    price: 15.75
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137",
    title: "Lip Care Balm",
    price: 8.99
  }
])

const visibleProducts = computed(() => {
  return showAll.value
    ? products.value
    : products.value.slice(0, 4)
})
</script>