<template>
  <authenticator :form-fields="formFields">

    <div class="">
      <Header />
      <main class="flex-1 p-8 bg-white max-w-6xl min-w-[320px] mx-auto mt-10">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" class="mt-5" />
          </Transition>
        </router-view>
      </main>
    </div>
  </authenticator>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { Authenticator } from "@aws-amplify/ui-vue";
// import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

// Assuming you have a separate component for your main app logic, e.g., 'Dashboard.vue'
// import Dashboard from './views/Dashboard.vue';

// Define your form fields for the Authenticator
const formFields = {
  signUp: {
    // Email first (order: 1)
    email: {
      order: 1,
      label: 'Email:',
      placeholder: 'Enter your email',
      required: true,
      type: 'email',
    },
    // First Name (given_name) next (order: 2)
    given_name: {
      order: 2, // Changed order to 2
      label: 'First Name:',
      placeholder: 'Enter your first name',
      required: true,
    },
    // Last Name (family_name) after First Name (order: 3)
    family_name: {
      order: 3, // Changed order to 3
      label: 'Last Name:',
      placeholder: 'Enter your last name',
      required: true,
    },
    // Password (order: 4)
    password: {
      order: 4, // Changed order to 4
      label: 'Password:',
      placeholder: 'Enter your password',
      required: true,
    },
    // Confirm Password (order: 5)
    confirm_password: {
      order: 5, // Changed order to 5
      label: 'Confirm Password:',
      placeholder: 'Confirm your password',
      required: true,
    },
    // If you decided to use a separate 'username' field for login, adjust its order accordingly
    // username: {
    //   order: 0, // Would make it appear before email
    //   label: 'Username:',
    //   placeholder: 'Choose a username',
    //   required: true,
    // },
  },
};
</script>

<style>
/* CSS for the fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  /* Transition both opacity and transform */
}

.fade-enter-from {
  /* When entering, start transparent and slightly below its final position */
  opacity: 0;
  transform: translateY(10px);
  /* Starts 10px below, slides up */
}

.fade-leave-to {
  /* When leaving, end transparent and slightly above its final position */
  opacity: 0;
  transform: translateY(-10px);
  /* Slides 10px up, then disappears */
}
</style>