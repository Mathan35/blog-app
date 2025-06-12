<template>
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
</template>

<script setup>
import Header from '@/components/Header.vue'
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