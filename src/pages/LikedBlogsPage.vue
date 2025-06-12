<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Favourite Blogs</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/600x400/93c5fd/000000?text=Blog+Image+A" alt="Blog Post Image"
                    class="w-full h-48 object-cover">
                <div class="p-6">
                    <p class="text-sm text-gray-500 mb-2">June 10, 2025</p>
                    <h3
                        class="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                        Demystifying React Hooks: A Comprehensive Guide
                    </h3>
                    <p class="text-gray-700 text-sm mb-4 line-clamp-3">
                        Understand the fundamental concepts behind React Hooks and how they revolutionize
                        component development.
                        This guide covers useState, useEffect, useContext, and custom hooks.
                    </p>
                    <router-link :to="{ name: 'BlogDetail', params: { id: 1 } }"
                        class="text-blue-600 font-medium hover:underline">
                        Read More &rarr;
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
