<template>
  <div class="p-10">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold">Все кроссовки</h1>
      <div class="flex items-center gap-4">
        <select
          @change="sneakersStore.onChangeSelect"
          class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <input
            @input="sneakersStore.onChangeSearchInput"
            type="text"
            class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
            placeholder="Поиск..."
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src="/search.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSneakersStore } from '../stores/SneakersStore'

const sneakersStore = useSneakersStore()
</script>
