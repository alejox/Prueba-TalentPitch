<template>
  <section class="py-8 px-4">
    <!-- Head -->
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <p class="text-tertiary font-medium mr-2">Match con la cultura</p>
        <!-- Progress Bar -->
        <div class="flex items-center gap-2">
          <div class="text-success text-base dark:text-white">{{ progress }}%</div>
          <div class="w-[276px] bg-gray-200 rounded-full h-[14px] dark:bg-gray-700">
            <div
              class="bg-success h-[14px] rounded-full dark:bg-blue-500"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
      <!-- Buttons -->
      <div class="flex gap-2">
        <button
          class="w-full flex items-center justify-center gap-2 bg-secondary py-1.5 px-3.5 rounded-md hover:bg-tertiary"
        >
          <p class="text-white whitespace-nowrap">Enviar Pitch</p>
        </button>
        <button
          class="w-full flex items-center justify-center gap-2 border border-secondary py-1.5 px-3.5 rounded-md hover:border-tertiary"
        >
          <img src="@/assets/svg/addUser.svg" alt="" />
          <p class="text-secondary font-medium whitespace-nowrap">Seguir</p>
        </button>
      </div>
    </div>
    <!-- Tabs -->

    <div class="mb-4 border-b dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Perfil
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Vacantes
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Listas
          </button>
        </li>
      </ul>
    </div>

    <!-- Tabs Content -->
    <div id="default-tab-content">
      <div
        class="hidden dark:bg-gray-800"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <TabProfile />
      </div>
      <div
        class="hidden dark:bg-gray-800"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <TabVacancy />
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        Listas
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import TabProfile from './tabs/TabProfile.vue';
import TabVacancy from './tabs/TabVacancy.vue';
let progress = ref(80);
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped>
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: #de1c7d;
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: #de1c7d;
}

.text-gray-500 {
  color: #9fa8da;
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: none;
}
</style>
