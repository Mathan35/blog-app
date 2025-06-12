<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800 text-center">Add New Blog Post</h1>

        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
                    <input type="text" id="title" v-model="blogPost.title"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter blog post title" required />
                </div>

                <div class="mb-4">
                    <label for="author" class="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                    <input type="text" id="author" v-model="blogPost.author"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., John Doe" required />
                </div>

                <div class="mb-4">
                    <label for="image-upload" class="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                    <input type="file" id="image-upload" @change="handleImageUpload" accept="image/*" class="mt-1 block w-full text-sm text-gray-500
                               file:mr-4 file:py-2 file:px-4
                               file:rounded-md file:border-0
                               file:text-sm file:font-semibold
                               file:bg-blue-50 file:text-blue-700
                               hover:file:bg-blue-100" />
                    <p class="mt-1 text-xs text-gray-500">Upload a main image for the blog post.</p>
                    <div v-if="blogPost.image" class="mt-4">
                        <p class="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
                        <img :src="blogPost.image" alt="Image Preview"
                            class="w-full h-48 object-cover rounded-md shadow-sm" />
                    </div>
                </div>
                <div class="mb-6">
                    <label for="content" class="block text-sm font-medium text-gray-700 mb-1">Blog Content</label>
                    <textarea id="content" v-model="blogPost.content" rows="10"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your blog content here..." required></textarea>
                </div>

                <button type="submit"
                    class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                    Publish Blog
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const blogPost = ref({
    title: '',
    author: '',
    image: '', // This property will now store the Data URL of the uploaded image
    content: '',
});

// --- KEY CHANGE HERE: handleImageUpload function ---
const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        // Basic validation for image type
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file (e.g., .png, .jpg, .gif).');
            blogPost.value.image = ''; // Clear previous image
            event.target.value = ''; // Clear file input visually
            return;
        }

        const reader = new FileReader(); // Create a FileReader instance
        reader.onload = (e) => {
            // When the file is loaded, its result (Data URL) is assigned to blogPost.image
            blogPost.value.image = e.target.result;
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
    } else {
        blogPost.value.image = ''; // Clear image if no file is selected (e.g., user cancels file picker)
    }
};
// --- END KEY CHANGE ---


const handleSubmit = () => {
    // Validate required fields
    if (!blogPost.value.title || !blogPost.value.author || !blogPost.value.content) {
        alert('Please fill in all required fields: Title, Author, and Content.');
        return;
    }

    // You might want to make image upload mandatory here:
    // if (!blogPost.value.image) {
    //     alert('Please upload an image for the blog post.');
    //     return;
    // }


    alert(`Blog "${blogPost.value.title}" by ${blogPost.value.author} has been added!`);

    // Reset the form fields after submission
    blogPost.value = {
        title: '',
        author: '',
        image: '', // Reset image field
        content: '',
    };
    // Manually clear the file input field, as v-model doesn't work for type="file"
    const fileInput = document.getElementById('image-upload');
    if (fileInput) {
        fileInput.value = '';
    }

    router.push('/my-blogs'); // Navigate to My Blogs page
};
</script>

<style scoped>
/* No specific scoped styles needed if only using Tailwind utilities */
</style>