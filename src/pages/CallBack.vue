<!-- src/views/Callback.vue -->
<template>
    <div>Logging in...</div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { Auth } from 'aws-amplify'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  onMounted(async () => {
    try {
      // Amplify automatically parses the `code` and exchanges for tokens
      const user = await Auth.currentAuthenticatedUser()
      console.log('Logged in user:', user)
  
      // Optional: store in local storage, Vuex, Pinia etc.
      router.push('/') // Redirect to home or dashboard
    } catch (error) {
      console.error('Error completing login:', error)
      router.push('/login') // Fallback if failed
    }
  })
  </script>
  