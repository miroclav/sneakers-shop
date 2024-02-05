<script setup>
import CardList from '@/components/CardList.vue';
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import Drawer from '@/components/Drawer.vue';
import { useSneakersStore } from '../stores/SneakersStore'

const sneakersStore = useSneakersStore()
</script>

<template>
  <Drawer v-if="sneakersStore.isDrawerOpen" />

  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">

    <Header />
    <Navigation />
    <CardList />
  </div>
</template>
