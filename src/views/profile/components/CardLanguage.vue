<template>
  <!-- Card -->
  <div class="border p-4 rounded-lg grid auto-rows-min gap-4">
    <!-- Head -->
    <div class="flex gap-2 items-center">
      <div class="bg-[#F6F6F6] p-1 rounded-full">
        <img class="h-6" :src="`src/assets/svg/${icon}.svg`" alt="" />
      </div>
      <p class="text-primary font-bold">{{ title }}</p>
    </div>
    <!-- Tags -->
    <div class="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
      <div>
        <p class="text-sm font-semibold">Ingles</p>
        <p class="text-sm text-gray-300">Avanzado</p>
      </div>
      <div>
        <p class="text-sm font-semibold">Frances</p>
        <p class="text-sm text-gray-300">Avanzado</p>
      </div>
      <div>
        <p class="text-sm font-semibold">Frances</p>
        <p class="text-sm text-gray-300">Avanzado</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
});
</script>

<style scoped></style>
