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
    </div>
</template>
<script setup>
    const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
        title: "Hydrating Face Cream",
        description: "Moisturizing cream for soft and smooth skin.",
        price: 24.99
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
        title: "Vitamin C Serum",
        description: "Brightens skin and reduces dark spots.",
        price: 19.99
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
        title: "Aloe Vera Gel",
        description: "Cooling gel that hydrates and soothes skin.",
        price: 12.50
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
        title: "Daily Sunscreen SPF50",
        description: "Protects skin from harmful UV rays.",
        price: 15.99
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524",
        title: "Foam Cleanser",
        description: "Gentle facial cleanser for all skin types.",
        price: 10.99
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
        title: "Night Repair Cream",
        description: "Repairs and nourishes skin overnight.",
        price: 29.99
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137",
        title: "Rose Water Toner",
        description: "Refreshing toner that balances skin pH.",
        price: 13.49
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        title: "Lip Sleeping Mask",
        description: "Keeps lips soft and hydrated overnight.",
        price: 9.99
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
        title: "Clay Face Mask",
        description: "Deep cleansing mask for glowing skin.",
        price: 18.75
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd",
        title: "Hyaluronic Acid Serum",
        description: "Boosts hydration and smooths fine lines.",
        price: 21.99
    }
];
    const onclick = (e)=>{
        onclick.value(products);
    }
</script>