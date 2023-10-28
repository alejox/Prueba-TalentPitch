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
    <div class="grid gap-x-2 gap-y-4" :class="columns ? 'grid-cols-9' : 'grid-cols-4'">
      <div v-for="item in copy" :key="item" class="bg-info rounded-full">
        <p class="text-infoText text-sm text-center">Copy</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  copy: Number,
  columns: Boolean
});
</script>

<style scoped></style>
