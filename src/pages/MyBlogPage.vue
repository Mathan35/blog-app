<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800 text-center">My Blog Posts</h1>

        <div v-if="myBlogs.length === 0" class="text-center text-gray-600 py-12">
            <p class="text-xl mb-4">You haven't added any blogs yet!</p>
            <router-link to="/add-blog" class="text-blue-600 hover:underline text-lg">
                Click here to add your first blog.
            </router-link>
        </div>

        <div v-else class="flex flex-col space-y-12 max-w-4xl mx-auto">
            <div v-for="blog in myBlogs" :key="blog.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300
                 flex flex-col md:flex-row items-start md:space-x-6 p-6">
                <img :src="blog.image || 'https://via.placeholder.com/600x400/eeeeee/000000?text=No+Image'"
                    :alt="blog.title" class="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 aspect-video">
                <div class="flex-1 flex flex-col">
                    <p class="text-sm text-gray-500 mb-2">{{ blog.date }} · By {{ blog.author }}</p>
                    <h3
                        class="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        {{ blog.title }}
                    </h3>
                    <p class="text-gray-700 text-sm mb-4 line-clamp-3">
                        {{ blog.content }}
                    </p>

                    <div class="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }"
                            class="text-blue-600 font-medium hover:underline">
                            Read More &rarr;
                        </router-link>
                        <div class="flex space-x-3">
                            <button @click="editBlog(blog.id)"
                                class="text-sm text-yellow-600 hover:text-yellow-800 focus:outline-none">
                                Edit
                            </button>
                            <button @click="confirmDelete(blog.id)"
                                class="text-sm text-red-600 hover:text-red-800 focus:outline-none">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const myBlogs = ref([]);

// Initialize with some static data
myBlogs.value = [
  {
    id: 1,
    title: 'Understanding Vue 3 Reactivity',
    author: 'Alice Johnson',
    date: 'June 10, 2024',
    image: 'https://via.placeholder.com/600x400/dbeafe/000000?text=Vue+Reactivity',
    content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
  },
  {
    id: 2,
    title: 'The Power of Tailwind CSS Grids',
    author: 'Bob Williams',
    date: 'June 05, 2024',
    image: 'https://via.placeholder.com/600x400/c7d2fe/000000?text=Tailwind+Grids',
    content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
  },
  {
    id: 3,
    title: 'A Developer\'s Guide to Effective Code Comments',
    author: 'Charlie Green',
    date: 'May 29, 2024',
    image: 'https://via.placeholder.com/600x400/bfdbfe/000000?text=Code+Comments',
    content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
  },
  {
    id: 4,
    title: 'Exploring Modern JavaScript Features (ES2023)',
    author: 'Dana White',
    date: 'June 01, 2024',
    image: 'https://via.placeholder.com/600x400/d1fae5/000000?text=ES2023',
    content: 'Vue 3s reactivity system is built on ES6 Proxies, offering a more efficient and powerful way to track changes',
  }
];

const editBlog = (id) => {
    alert(`Implement edit functionality for blog ID: ${id}`);
    // In a real app, you might navigate to an /edit-blog/:id page
    // router.push({ name: 'EditBlog', params: { id: id } });
};

const confirmDelete = (id) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
        deleteBlogPost(id);
    }
};
</script>

<style scoped>
/* No specific scoped styles needed if only using Tailwind utilities */
</style>