<template>
    <div class="w-full h-auto lg:px-24 md:px-6 px-4 py-10 position-absolute bg-pink-200">

        <!-- title -->
        <div class="flex justify-between">
          <h1 class="font-bold text-3xl text-center">Product List</h1>
          <h1 class="cursor-pointer shadow-xl rounded-xl px-3 py-2 hover:bg-pink-600
           hover:text-white">View All</h1>
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

        <div class="w-full h-auto bg-pink-300 mt-10 shadow-2xl py-7 px-10 rounded-3xl">
            <!-- maincard -->
            <div class="w-full py-7">
              <!-- card -->
              <div class="w-full flex justify-between">
                <!-- left -->
                <div class="font-bold w-[35%]">
                  <p>Glow Every Day</p>
                  <h1 class="text-4xl">Skincare That</h1>
                  <h1 class="text-4xl"><mark class="bg-pink-300 text-pink-600">Loves</mark> You Back</h1>
                  <p class="py-2">Flat 20% off on our best-seller products.
                    <br>Limited time offer!
                  </p>
                  <button class="bg-blue-300 hover:bg-blue-600 hover:text-white rounded-3xl px-5 py-2 mt-3 text-black">Show Now</button>
                </div>  
                <!-- center -->
                <div class="w-[40%]">
                  <img class="w-full rounded-2xl h-60" src="/src/assets/image/categories/image.png" alt="">
                </div>
                <!-- right -->
                <div class="w-[30%] pl-40">
                  <h1 class="font-bold text-4xl text-pink-600">10K+</h1>
                  <p>Happy Customers</p>
                  <h1 class="pt-12 text-4xl font-bold text-pink-600">4.8</h1>
                  <p>Average Rating </p>
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
];

</script>