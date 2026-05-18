<template>
    <div class="border-white w-96 h-[500px] pt-5 m-auto my-35 p-5 rounded-xl bg-blue-100 shadow-2xl">
        <h1 class="text-center font-bold text-2xl">Login</h1>
        <div class="ms-5 py-5 leading-10">
            <div class="">
                <label for="">Email address</label> <br>
                <input class="w-full border rounded-lg focus:outline-none px-4" type="text" placeholder="example@gmail.com">
            </div>
            <div class="">
                <label for="">Password</label> <br>
                <input class="w-full border rounded-lg focus:outline-none px-4" type="password" placeholder="Enter password...">
                <div class="flex gap-3">
                    <input type="checkbox">
                    <p>I agree to the terms and condition</p>
                </div>  
            </div>
            <button class="text-center bg-blue-600 w-full rounded-xl hover:bg-blue-500 
            text-white">Create Account</button>
            <div class="flex justify-center gap-2">
                <p>You already have account?</p>
                <a href="" class="text-blue-500">Register</a>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>