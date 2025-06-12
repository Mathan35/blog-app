<!-- src/pages/VerifyBlogsPage.vue -->
<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800 text-center">Verify New Blog Posts</h1>

        <div v-if="pendingBlogs.length === 0" class="text-center text-gray-600 py-12">
            <p class="text-xl mb-4">No blogs currently awaiting verification.</p>
            <router-link to="/add-blog" class="text-blue-600 hover:underline text-lg">
                Add a new blog post.
            </router-link>
        </div>

        <div v-else class="flex flex-col space-y-12 max-w-4xl mx-auto">
            <div v-for="blog in pendingBlogs" :key="blog.id"
                class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-start md:space-x-6 p-6">

                <img :src="blog.image || 'https://via.placeholder.com/600x400/eeeeee/000000?text=No+Image'"
                    :alt="blog.title" class="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 aspect-video">

                <div class="flex-1 flex flex-col">
                    <p class="text-sm text-gray-500 mb-2">{{ blog.date }} · By {{ blog.author }}</p>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">
                        {{ blog.title }}
                    </h3>
                    <p class="text-gray-700 text-sm mb-4 line-clamp-3">
                        {{ blog.content }}
                    </p>

                    <div class="mt-auto flex justify-end items-center pt-4 border-t border-gray-100 space-x-3">
                        <button @click="approveBlog(blog.id)"
                            class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-150 ease-in-out">
                            Approve
                        </button>
                        <button @click="rejectBlog(blog.id)"
                            class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-150 ease-in-out">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

import { ref } from 'vue';

const myBlogs = ref([]);

myBlogs.value = [
    {
        id: 1,
        title: 'Understanding Vue 3 Reactivity',
        author: 'Alice Johnson',
        status: 'pending',
        date: 'June 10, 2024',
        image: 'https://via.placeholder.com/600x400/dbeafe/000000?text=Vue+Reactivity',
        content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
    },
    {
        id: 2,
        title: 'The Power of Tailwind CSS Grids',
        author: 'Bob Williams',
        status: 'pending',
        date: 'June 05, 2024',
        image: 'https://via.placeholder.com/600x400/c7d2fe/000000?text=Tailwind+Grids',
        content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
    },
    {
        id: 3,
        title: 'A Developer\'s Guide to Effective Code Comments',
        author: 'Charlie Green',
        status: 'verified',
        date: 'May 29, 2024',
        image: 'https://via.placeholder.com/600x400/bfdbfe/000000?text=Code+Comments',
        content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
    },
    {
        id: 4,
        title: 'Exploring Modern JavaScript Features (ES2023)',
        author: 'Dana White',
        status: 'pending',
        date: 'June 01, 2024',
        image: 'https://via.placeholder.com/600x400/d1fae5/000000?text=ES2023',
        content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
    }
];

// Filter blogs to show only those with 'pending' status
const pendingBlogs = computed(() => {
    return myBlogs.value.filter(blog => blog.status === 'pending');
});

const approveBlog = (id) => {
    alert('Blog approved and now visible on the main page!');
};

const rejectBlog = (id) => {
    if (confirm('Are you sure you want to reject this blog? It will be deleted.')) {
        alert('Blog rejected and removed.');
    }
};
</script>

<style scoped>
/* No specific scoped styles needed if only using Tailwind utilities */
</style>