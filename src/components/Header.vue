<script setup>
import { useSneakersStore } from '../stores/SneakersStore'

const sneakersStore = useSneakersStore()
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <router-link :to="{ path: '/' }" class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-11" />
      <div>
        <h2 class="font-bold text-xl uppercase">Best Sneakers</h2>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li @click="sneakersStore.toggleDrawer" class="flex items-center gap-3 cursor-pointer">
        <img src="/cart.svg" alt="Cart" />
        <b>{{ sneakersStore.totalPrice }} руб.</b>
      </li>
      <router-link :to="{ path: '/favorites' }" class="flex items-center gap-3 cursor-pointer">
        <img src="/heart.svg" alt="Favorite" />
        <span>Закладки</span>
      </router-link>
      <router-link :to="{ path: '/user' }" class="flex items-center gap-3 cursor-pointer">
        <img src="/profile.svg" alt="User" />
        <span>Профиль</span>
      </router-link>
    </ul>
  </header>
</template>
