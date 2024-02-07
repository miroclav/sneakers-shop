<script setup>
import Card from '@/components/Card.vue'
import { useSneakersStore } from '../stores/SneakersStore'
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'

const sneakersStore = useSneakersStore()
</script>

<template>
  <Drawer v-if="sneakersStore.isDrawerOpen" />

  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
    <Header />
    <div class="p-10">
      <h3 class="text-2xl font-medium" v-if="sneakersStore.showFavorites().length === 0">
        Нет избранных товаров
      </h3>
      <div v-else>
        <h1 class="text-3xl font-bold mb-4">Мои закладки</h1>
        <div class="grid grid-cols-4 gap-10 p-4">
          <transition-group name="list">
            <Card
              :onClickFavorite="() => sneakersStore.addToFavorite(item)"
              v-for="item in sneakersStore.showFavorites()"
              :title="item.title"
              :price="item.price"
              :img="item.imageUrl"
              :key="item.id"
              :isFavorite="item.isFavorite"
              :onClickAdded="() => sneakersStore.addToCart(item)"
              :isAdded="item.isAdded"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
