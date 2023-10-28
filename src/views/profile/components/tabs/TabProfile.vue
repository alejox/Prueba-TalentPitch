<template>
  <section class="grid auto-rows-min gap-4">
    <!-- Card Header -->
    <div class="border p-4 rounded-lg grid auto-rows-min gap-4">
      <!-- Head -->
      <div class="flex gap-2 items-center">
        <div class="bg-[#F6F6F6] p-1 rounded-full">
          <img class="" src="@/assets/svg/user.svg" alt="" />
        </div>
        <p class="text-primary font-bold">Resumen de la empresa</p>
      </div>
      <!-- Description -->
      <div class="grid auto-rows-min gap-2">
        <p class="text-gray-800 font-semibold text-sm">Descripción</p>
        <p class="text-sm text-gray-500">
          En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el
          mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo
        </p>
      </div>
      <!-- Info -->
      <div class="grid grid-cols-2 gap-x-14 gap-y-2">
        <div class="grid auto-rows-min gap-2">
          <p class="text-gray-800 font-semibold text-sm">Correo electrónico</p>
          <p class="text-sm text-gray-500">ejemplo@ejemplo.com</p>
        </div>
        <div class="grid auto-rows-min gap-2">
          <p class="text-gray-800 font-semibold text-sm">Número de contacto</p>
          <p class="text-sm text-gray-500">3005895648</p>
        </div>
        <div class="grid auto-rows-min gap-2">
          <p class="text-gray-800 font-semibold text-sm">Estados deseados buscados</p>
          <p class="text-sm text-gray-500">Emprendedor, practicas, primer empleo</p>
        </div>
        <div class="grid auto-rows-min gap-2">
          <p class="text-gray-800 font-semibold text-sm">Rol más buscado</p>
          <p class="text-sm text-gray-500">Lider UX</p>
        </div>
      </div>
    </div>
    <!-- Cards -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <CardsCopy title="Áreas de interés" :copy="3" icon="pointer" />
      <CardsCopy title="Vacantes sugeridas por AI" :copy="3" icon="brain" />
    </div>
    <!-- Division -->
    <div class="flex items-center">
      <p class="text-primary text-lg font-bold whitespace-nowrap">Lo que buscamos en el talento</p>
      <div class="border-b w-full mx-4"></div>
    </div>
    <!-- Cards -->
    <div class="grid grid-cols-2 gap-4 mt-4">
      <CardsCopy title="Conocimientos" :copy="8" icon="knowledge" />
      <CardsCopy title="Habilidades" :copy="8" icon="clip" />
    </div>
    <!-- Cards -->
    <div class="grid grid-cols-2 gap-4">
      <CardsCopy title="Herramientas" :copy="8" icon="tools" />
      <CardLanguage title="Idiomas" icon="language" />
    </div>
    <CardsCopy class="mb-4" title="Metodologías" columns :copy="4" icon="list" />
    <!-- Division -->
    <div class="flex items-center">
      <p class="text-primary text-lg font-bold whitespace-nowrap">Lo que ofrecemos en la empresa</p>
      <div class="border-b w-full mx-4"></div>
    </div>
    <!-- Cards -->
    <div class="grid grid-cols-2 gap-4 mt-4">
      <CardsCopy title="Beneficios que ofrecemos" :copy="8" icon="brain" />
      <CardsCopy title="Formas de trabajo que ofrecemos " :copy="8" icon="brief" />
      <CardsCopy title="Cultura que ofrecemos" :copy="4" icon="comments" />
      <CardsCopy title="Comunidades" :copy="4" icon="users" />
    </div>
  </section>
</template>

<script setup>
import CardsCopy from '../CardsCopy.vue';
import CardLanguage from '../CardLanguage.vue';
</script>

<style lang="scss" scoped></style>
