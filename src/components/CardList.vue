<script setup>
import Card from '@/components/Card.vue'
import { useSneakersStore } from '../stores/SneakersStore'

const sneakersStore = useSneakersStore()
</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <transition-group name="list">
      <Card
        :onClickFavorite="() => sneakersStore.addToFavorite(item)"
        :onClickAdded="() => sneakersStore.addToCart(item)"
        v-for="item in sneakersStore.items"
        :title="item.title"
        :price="item.price"
        :img="item.imageUrl"
        :key="item.id"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
      />
    </transition-group>
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
