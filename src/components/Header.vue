<template>
    <div class="w-full shadow-lg bg-white px-10 flex justify-between items-center">
        <img src="@/assets/blog-logo.png" alt="Vue logo" class="w-24 h-24 " />
        <nav class="space-x-2 flex justify-between">
            <router-link to="/" class="block px-4 rounded-md"
                :class="[defaultClass, { [activeClass]: route.path === '/' }]">
                🏠 Home
            </router-link>
            <router-link to="/liked" class="block px-4 rounded-md"
                :class="[defaultClass, { [activeClass]: route.path === '/liked' }]">
                ❤️ Liked Blogs
            </router-link>
            <router-link to="/add-blog" class="block px-4 rounded-md"
                :class="[defaultClass, { [activeClass]: route.path === '/add-blog' }]">
                ➕ Add Blog
            </router-link>
            <router-link to="/my-blogs" class="block px-4 rounded-md"
                :class="[defaultClass, { [activeClass]: route.path === '/my-blogs' }]">
                📝 My Blog
            </router-link>
            <router-link to="/verify-blogs" class="block px-4 rounded-md"
                :class="[defaultClass, { [activeClass]: route.path === '/verify-blogs' }]">
                ✅ Verify Blogs
            </router-link>
            <router-link to="/profile" class="block px-4 rounded-md"
                :class="[defaultClass, { [activeClass]: route.path === '/profile' }]">
                👤 Profile
            </router-link>
        </nav>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // <--- ADD THIS LINE

const route = useRoute(); // <--- ADD THIS LINE to get the route object

const activeClass = 'bg-green-500 text-white font-semibold p-1'
const defaultClass = 'text-gray-700 hover:bg-gray-200 p-1'
</script>
