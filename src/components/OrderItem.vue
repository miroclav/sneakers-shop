<script setup>
defineProps({
  item: Object,
  title: String,
  img: String,
  price: Number,
  hiddenFav: {
    type: Boolean,
    required: false
  },
  hiddenAdd: {
    type: Boolean,
    required: false
  },
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdded: Function
})
</script>

<template>
  <div
    class="p-2 border border-slate-100 rounded-xl cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div class="flex font-medium mb-2 justify-around">
      <h3>Заказ №{{ item.id }} от {{ item.orderDate }}</h3>
      <span>На сумму: {{ item.totalPrice }} руб.</span>
    </div>
    <div
      v-for="order in item.items"
      class="flex flex-col items-center gap4- border border-slate-100 rounded-xl p-1 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
    >
      <div class="flex gap-4 items-center">
        <img :src="order.imageUrl" class="w-8 h-8" alt="Sneaker" />
        <p>{{ order.title }}</p>
        <span class="font-bold">{{ order.price }} руб.</span>
      </div>
    </div>
  </div>
</template>
