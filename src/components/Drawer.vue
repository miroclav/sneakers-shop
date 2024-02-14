<script setup>
import CartItem from './CartItem.vue'
import { useSneakersStore } from '../stores/SneakersStore'
import Loader from './Loader.vue'
import InfoBlock from './InfoBlock.vue'

const sneakersStore = useSneakersStore()
</script>

<template>
  <div
    @click="sneakersStore.toggleDrawer"
    class="fixed z-10 top-0 h-full w-full bg-black opacity-70"
  />
  <div
    class="flex flex-col justify-between fixed h-full scroll-auto z-10 top-0 h-full right-0 w-96 bg-white px-10 py-7"
  >
    <h2 class="text-2xl font-bold mb-10 flex items-center gap-5">
      <svg
        @click="sneakersStore.toggleDrawer"
        class="rotate-180 hover:-translate-x-1 opacity-30 hover:opacity-100 transition cursor-pointer"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Корзина
    </h2>
    <InfoBlock
      class="h-full"
      v-if="!sneakersStore.totalPrice && !sneakersStore.isCreated"
      imgUrl="/package-icon.png"
      title="Корзина пустая"
      description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
    />
    <InfoBlock
      class="h-full"
      v-if="sneakersStore.isCreated"
      imgUrl="/order-success-icon.png"
      title="Заказ принят"
      description="Можете его посмотеть у себя в профиле"
    />
    <div v-else class="flex flex-col flex-1 h-full justify-between">
      <div class="flex flex-col gap-5 overflow-auto">
        <CartItem
          v-for="item in sneakersStore.showCart()"
          :title="item.title"
          :price="item.price"
          :img="item.imageUrl"
          :key="item.id"
          :onClickDelete="() => sneakersStore.deleteFromCart(item)"
        />
      </div>

      <div>
        <div class="flex flex-col gap-5 mb-10">
          <div class="flex items-end gap-2">
            <span>Итого:</span>
            <div class="flex-1 border-b border-dashed" />
            <span class="font-bold">{{ sneakersStore.totalPrice }} руб.</span>
          </div>

          <div class="flex items-end gap-2">
            <span>Налог 5%:</span>
            <div class="flex-1 border-b border-dashed" />
            <span class="font-bold">{{ sneakersStore.vatPrice }} руб.</span>
          </div>
        </div>
        <Loader class="flex-1 flex-col" v-if="sneakersStore.isLoading" />
        <button
          v-else
          class="flex justify-center items-center disabled:bg-slate-300 gap-3 w-full py-3 bg-lime-500 text-white rounded-xl transition active:bg-lime-700 hover:bg-lime-600"
          :disabled="!sneakersStore.totalPrice"
          @click="sneakersStore.createOrders"
        >
          Оформить заказ
          <img src="/arrow-next.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>
</template>
