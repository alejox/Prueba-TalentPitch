<template>
  <aside
    class="-mt-[122px] grid auto-rows-min gap-5 pb-4 pt-8 px-6 w-[336px] bg-white border border-solid rounded-lg mb-20"
  >
    <!-- User -->
    <div
      class="mx-auto flex items-center justify-center bg-[#E8EAF6] w-[170px] h-[170px] rounded-full"
    >
      <img class="  " src="@/assets/svg/ac.svg" alt="" />
    </div>
    <!-- Info -->
    <div class="grid auto-rows-min gap-2 text-center">
      <p class="text-2xl text-primary font-semibold">A.C. Telecom</p>
      <p class="text-gray-400">@ac-telecom</p>
      <p class="text-tertiary">Startup - tecnología</p>
      <div class="flex items-center justify-center gap-1">
        <div class="w-2.5 h-2.5 bg-success rounded-full"></div>
        <p class="text-success">Empresa activa</p>
      </div>
      <div class="flex items-center justify-center">
        <img src="@/assets/svg/place.svg" alt="" />
        <p class="text-gray-400">Floridablanca - Colombia</p>
      </div>
      <div class="flex justify-center gap-2 items-center">
        <star-rating star-size="20" inactive-color="#FFF8E1" rating="4" read-only />
        <p class="text-sm text-gray-400">(10 Reviews)</p>
      </div>
      <div class="flex items-center justify-center gap-6 py-2">
        <img src="@/assets/svg/fb.svg" alt="" />
        <img src="@/assets/svg/ig.svg" alt="" />
        <img src="@/assets/svg/x.svg" alt="" />
        <img src="@/assets/svg/in.svg" alt="" />
      </div>
      <div class="flex items-center justify-center gap-1">
        <img src="@/assets/svg/link.svg" alt="" />
        <a href="#" class="text-secondary">https://www.actelecom.net/telecom</a>
      </div>
    </div>
    <!-- Photo -->
    <img class="hover:brightness-125 cursor-pointer" src="@/assets/img/girl.png" alt="" />
    <!-- QR -->
    <div class="border border-solid rounded-lg flex justify-center w-full py-5">
      <img src="@/assets/img/qr.png" alt="" />
    </div>
    <!-- Buttons -->
    <button
      class="w-full flex items-center justify-center gap-2 bg-secondary py-1.5 px-3.5 rounded-md hover:bg-tertiary"
    >
      <img src="@/assets/svg/share.svg" alt="" />
      <p class="text-white">Compartir perfil</p>
    </button>
    <label class="cursor-pointer flex rounded-md overflow-hidden h-[44px] border" for="file">
      <button
        class="flex items-center justify-center gap-2 bg-secondary py-1.5 px-3.5 hover:bg-tertiary"
        id="file"
      >
        <img src="@/assets/svg/download.svg" alt="" />
      </button>
      <p class="ml-6 my-auto text-gray-400 text-sm">Descargar resumen</p></label
    >
    <!-- Data -->
    <div>
      <div
        v-for="item in data"
        :key="item.icon"
        class="py-4 border-b last:border-0 flex justify-between items-center"
      >
        <div class="flex items-center gap-1">
          <img :src="`src/assets/svg/${item.icon}.svg`" alt="" />
          <p class="text-gray-500 text-xs font-semibold uppercase">{{ item.text }}</p>
        </div>
        <p class="text-gray-500 font-bold">20</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import StarRating from 'vue-star-rating';

const data = [
  { icon: 'talents', text: 'Talentos' },
  { icon: 'eye', text: 'vistas del perfil' },
  { icon: 'video', text: 'vistas del perfil' },
  { icon: 'exhb', text: 'Exhibiciones' },
  { icon: 'vacancy', text: 'Vacantes' },
  { icon: 'photo', text: 'Contenidos' }
];
</script>

<style>
.vue-star-rating-rating-text {
  display: none;
}
</style>
