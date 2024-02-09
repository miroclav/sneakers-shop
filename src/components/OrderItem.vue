<script setup>
defineProps({
  item: Object,
  title: String,
  img: String,
  price: Number,
  onClickDelete: Function
})
</script>

<template>
  <div
    class="p-2 border border-slate-100 rounded-xl cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div class="flex font-medium mb-2 justify-between">
      <h3>Заказ №{{ item.id }} от {{ item.orderDate }}</h3>
      <span>На сумму: {{ item.totalPrice }} руб.</span>
      <img
        @click="onClickDelete"
        class="cursor-pointer opacity-30 hover:opacity-100 transition"
        src="/close.svg"
        alt="Close"
      />
    </div>
    <div
      v-for="order in item.items"
      class="flex flex-col gap-4 border-b border-slate-100 rounded-xl p-1"
    >
      <div class="flex gap-4 items-center">
        <img :src="order.imageUrl" class="w-8 h-8" alt="Sneaker" />
        <p>{{ order.title }}</p>
        <span>{{ order.price }} руб.</span>
      </div>
    </div>
  </div>
</template>
