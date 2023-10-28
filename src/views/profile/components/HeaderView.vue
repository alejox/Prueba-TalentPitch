<template>
  <header class="h-[230px] w-full flex items-center justify-center overflow-hidden">
    <div class="max-w-[1440px] w-full h-[230px] mx-auto relative">
      <img
        class="absolute top-5 right-7 bg-white p-2 rounded-full hover:bg-gray-300 cursor-pointer"
        src="@/assets/svg/edit.svg"
        title="Change Banner"
        alt="Edit button"
      />
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-image: url('@/assets/img/header-bg.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
