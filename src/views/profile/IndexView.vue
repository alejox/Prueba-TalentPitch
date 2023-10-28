<template>
  <HeaderView />
  <main class="grid grid-cols-[fit-content(200px),1fr] max-w-[1140px] mx-auto">
    <AsideView />
    <BodyView />
  </main>
</template>

<script setup>
import HeaderView from './components/HeaderView.vue';
import AsideView from './components/AsideView.vue';
import BodyView from './components/BodyView.vue';
</script>

<style scoped></style>
