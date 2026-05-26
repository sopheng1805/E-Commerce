<template>

    <div class="w-full h-screen flex justify-center items-center bg-pink-50">

        <div class="w-96 bg-white p-6 rounded-2xl shadow-2xl">

            <h1 class="text-center text-3xl font-bold mb-5">
                Register
            </h1>

            <!-- Username -->
            <div class="mb-4">
                <label>Full Name</label>

                <input
                    v-model="username"
                    type="text"
                    placeholder="Enter full name..."
                    class="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none"
                >
            </div>

            <!-- Email -->
            <div class="mb-4">
                <label>Email</label>

                <input
                    v-model="email"
                    type="email"
                    placeholder="example@gmail.com"
                    class="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none"
                >
            </div>

            <!-- Password -->
            <div class="mb-4">
                <label>Password</label>

                <input
                    v-model="password"
                    type="password"
                    placeholder="Enter password..."
                    class="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none"
                >
            </div>

            <!-- Checkbox -->
            <div class="flex gap-3 items-center mb-4">
                <input type="checkbox" v-model="agree">

                <p>I agree to the terms and conditions</p>
            </div>

            <!-- Button -->
            <button
                @click="register"
                class="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-400"
            >
                Create Account
            </button>
                <router-link to="/home" class="text-pink-500">
          show information before register
        </router-link>
            <!-- Login -->
            <div class="flex justify-center gap-2 mt-4">
                <p>Already have an account?</p>

                <router-link
                    to="/login"
                    class="text-blue-500 hover:underline"
                >
                    Login
                </router-link>
            </div>

        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const agree = ref(false)

const register = () => {

    if (
        username.value === '' ||
        email.value === '' ||
        password.value === ''
    ) {
        alert('Please fill all fields')
        return
    }

    if (!agree.value) {
        alert('Please agree to the terms')
        return
    }

    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    localStorage.setItem('user', JSON.stringify(user))

    alert('Register Success')

    router.push('/login')
}
</script>