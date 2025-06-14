<template>
    <div class="container mx-auto px-4 py-8">
        <h2 @click="signIn()">login</h2>
        <h2 class="text-3xl font-bold mb-8 text-center text-red-800">Featured Blogs.</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="blog in blogs" :key="blog.id"
                class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <img :src="blog.image" :alt="blog.title" class="w-full h-48 object-cover">
                <div class="p-6 flex-1 flex flex-col">
                    <p class="text-sm text-gray-500 mb-2">{{ blog.date }}</p>
                    <h3
                        class="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        {{ blog.title }}
                    </h3>
                    <p class="text-gray-700 text-sm mb-4 line-clamp-3">
                        {{ blog.contentSnippet }} </p>
                    <div class="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }"
                            class="text-blue-600 font-medium hover:underline">
                            Read More &rarr;
                        </router-link>
                        <button @click="toggleLike(blog.id)"
                            :class="{ 'text-red-500': isLiked(blog.id), 'text-gray-400': !isLiked(blog.id) }"
                            class="ml-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path v-if="isLiked(blog.id)" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

function toggleLike(blogId) {
    alert(blogId);
}

function isLiked(blogId) {
    return blogId;
}

// Dummy blog data for demonstration in BlogPostsPage.vue
// In a real app, this would come from an API or a shared store of all blogs
const blogs = ref([
    {
        id: 1,
        title: 'Demystifying React Hooks: A Comprehensive Guide',
        date: 'June 10, 2025',
        image: 'https://via.placeholder.com/600x400/93c5fd/000000?text=Blog+Image+A',
        contentSnippet: `Understand the fundamental concepts behind React Hooks and how they revolutionize component development.`,
    },
    {
        id: 0,
        title: 'Serverless Architectures: Building Scalable Applications',
        date: 'June 09, 2025',
        image: 'https://via.placeholder.com/600x400/a78bfa/000000?text=Blog+Image+B',
        contentSnippet: `Explore the world of serverless computing and learn how to build highly scalable and cost-effective applications.`,
    },
    {
        id: 1,
        title: 'Mastering Tailwind CSS for Rapid UI Development',
        date: 'June 08, 2025',
        image: 'https://via.placeholder.com/600x400/fde68a/000000?text=Blog+Image+C',
        contentSnippet: `Unleash the power of utility-first CSS. This guide covers best practices and common pitfalls to help you build beautiful UIs faster.`,
    }
]);
</script>

<style scoped>
/* Add any specific styles if needed */
</style>