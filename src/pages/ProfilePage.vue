<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800 text-center">Your Profile</h1>

        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div v-if="!isEditing">
                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-500">Full Name</p>
                    <p class="text-lg text-gray-900">{{ profileData.name }}</p>
                </div>

                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-500">Email Address</p>
                    <p class="text-lg text-gray-900">{{ profileData.email }}</p>
                </div>

                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-500">Bio</p>
                    <p class="text-lg text-gray-900 leading-relaxed">{{ profileData.bio || 'No bio provided.' }}</p>
                </div>

                <button @click="editProfile"
                    class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                    Edit Profile
                </button>
            </div>

            <div v-else>
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" v-model="editingData.name"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" v-model="editingData.email"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div class="mb-6">
                    <label for="bio" class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea id="bio" v-model="editingData.bio" rows="4"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <div class="flex space-x-4">
                    <button @click="saveProfile"
                        class="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                        Save Changes
                    </button>
                    <button @click="cancelEdit"
                        class="flex-1 bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive data for the profile information
const profileData = ref({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'A passionate developer and blogger, always learning and sharing insights on web technologies, design, and productivity. I love coffee and open source!',
});

// Reactive flag to toggle between display and edit mode
const isEditing = ref(false);

// A temporary copy of the data when in edit mode, to allow cancelling changes
const editingData = ref({});

// Function to switch to edit mode
const editProfile = () => {
    isEditing.value = true;
    // Create a deep copy of profileData so that changes in editingData
    // don't directly affect profileData until saved
    editingData.value = { ...profileData.value };
};

// Function to save changes
const saveProfile = () => {
    // In a real app, you would send editingData to your backend here
    // e.g., await api.updateProfile(editingData.value);

    // For this example, we just update the local profileData
    profileData.value = { ...editingData.value };
    isEditing.value = false;
    alert('Profile updated successfully!'); // Simple feedback
};

// Function to cancel editing
const cancelEdit = () => {
    isEditing.value = false;
    // editingData is discarded, profileData remains unchanged
};
</script>

<style scoped>
/* Scoped styles ensure these only apply to this component */
/* You can add any specific component styles here if needed,
     but most styling is handled by Tailwind classes in the template. */
</style>