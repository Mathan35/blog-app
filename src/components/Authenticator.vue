<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

</script>

<template>
  <authenticator >
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.signInDetails.loginId }}!</h1>
      <button @click="signOut">Sign Out</button>

    </template>
  </authenticator>
</template>

<style scoped>
/* Your app-specific styles */
</style>