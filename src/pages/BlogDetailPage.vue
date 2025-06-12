<template>
    <div class="container mx-auto px-4 py-8">
      <button @click="goBack" class="text-blue-600 font-medium hover:underline mb-4 block">&larr; Back to Blogs</button>
      <div v-if="post">
        <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
        <h1 class="text-4xl font-bold mb-4 text-gray-900">{{ post.title }}</h1>
        <p class="text-sm text-gray-600 mb-6">Published on {{ post.date }} by {{ post.author }}</p>
        <div class="prose max-w-none text-gray-800 leading-relaxed" v-html="post.content"></div>
      </div>
      <div v-else class="text-center text-gray-600">
        <p>Loading blog post or post not found...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  // If you set `props: true` in your router, you can receive the id directly:
  const props = defineProps({
    id: {
      type: [String, Number],
      required: true
    }
  });
  
  const route = useRoute(); // Fallback if props: true is not used or for other route info
  const router = useRouter();
  const post = ref(null); // To store the fetched blog post data
  
  // Simulate fetching blog post data
  const fetchBlogPost = (postId) => {
    // In a real app, you'd make an API call here:
    // fetch(`/api/blog-posts/${postId}`)
    //   .then(res => res.json())
    //   .then(data => post.value = data)
    //   .catch(error => console.error('Error fetching blog post:', error));
  
    // Mock data for demonstration:
    const allPosts = {
      1: {
        id: 1,
        title: 'Demystifying React Hooks: A Comprehensive Guide',
        date: 'June 10, 2025',
        author: 'Jane Doe',
        image: 'https://via.placeholder.com/800x450/93c5fd/000000?text=Blog+Detail+A',
        content: `
          <p>Welcome to a deep dive into React Hooks! Hooks have revolutionized how we write React components, making stateful logic reusable and easier to test.</p>
          <p><strong>useState:</strong> This hook allows you to add state to functional components. It returns a stateful value and a function to update it.</p>
          <pre><code class="language-js">`
        },
    // Add more mock posts if needed for different IDs
    };
  
    post.value = allPosts[postId] || null;
  };
  
  // Fetch the post when the component mounts
  onMounted(() => {
    fetchBlogPost(props.id);
  });
  
  // Watch for changes in the route ID (e.g., if navigating between blog posts on the same page)
  watch(() => props.id, (newId) => {
    if (newId) {
      fetchBlogPost(newId);
    }
  });
  
  const goBack = () => {
    router.back(); // Go back to the previous page in history
  };
  </script>