<template>
  <Disclosure as="nav" class="bg-primary" v-slot="{ open }">
    <div class="mx-auto max-w-[1440px] px-12 py-3 sm:px-6 lg:px-[140px]">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <!-- Logo -->
          <div class="flex flex-shrink-0 items-center">
            <img class="w-auto" src="@/assets/svg/talent-logo.svg" alt="TalentPitch logo" />
          </div>
          <!-- Routes -->
          <div class="hidden mx-auto sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current ? 'text-secondary ' : 'text-gray-300 hover:text-secondary',
                  'rounded-md px-3 py-2 text-base font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button class="flex items-center gap-2 mr-7 bg-secondary py-1.5 px-3.5 rounded-md">
            <p class="text-white text-sm">Comenzar</p>
            <img src="@/assets/svg/plus.svg" alt="" />
          </button>
          <button
            type="button"
            class="relative mr-7 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <img src="@/assets/svg/mail.svg" alt="" />
          </button>
          <button
            type="button"
            class="relative mr-7 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <img src="@/assets/svg/bell.svg" alt="" />
          </button>
          <button
            @click="toggleDark()"
            type="button"
            class="relative mr-7 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <img src="@/assets/svg/sun.svg" alt="" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex items-center rounded-full text-sm focus:outline-none"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img class="h-12 w-12 rounded-full" src="@/assets/svg/avatar.svg" alt="" />
                <img class="ml-1.5" src="@/assets/svg/arrow.svg" alt="" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const navigation = [
  { name: 'Conectate', href: '#', current: true },
  { name: 'Mi muro', href: '#', current: false },
  { name: 'Mis listas', href: '#', current: false },
  { name: 'Aprende', href: '#', current: false }
];
</script>
