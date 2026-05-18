<template>
    <div class="w-full h-auto lg:px-24 md:px-6 px-4 py-10 position-absolute bg-pink-200">
        <div class="flex justify-between">
            <h1 class="font-bold text-2xl">Best Seller</h1>
            <button class="shadow-xl px-3 py-2 rounded-xl hover:bg-pink-500 hover:text-white
            cursor-pointer">View All</button>
        </div>
        <!-- main card -->
        <div class="w-full pt-10 flex gap-8 flex-wrap">
            <!-- card -->
            <div v-for="item in products" :key="item" class="w-full md:w-[48px] lg:w-[23%]
            shadow-2xl rounded-xl overflow-hidden h-[410px]">
                <!-- card header -->
                <div class="w-full h-[70%]">
                    <img class="w-full h-full object-fit-cover" 
                    :src="item.image" :alt="item.title">
                </div>
                <!-- card body -->
                <div class="px-3 py-2">
                    <h1 class="font-bold text-xl">{{ item.title }}</h1>
                    <p class="font-bold pt-2">$ {{ item.price }}</p>
                    <!-- button -->
                    <div class="flex justify-between pt-1">
                        <button class="bg-red-500 text-white rounded-xl px-3 py-2 cursor-pointer
                        hover:bg-red-700">Details</button>
                        <button class="bg-blue-500 text-white rounded-xl px-3 py-2 cursor-pointer
                        hover:bg-blue-700">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
      const products = [
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
  }]
</script>