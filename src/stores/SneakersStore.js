import { defineStore } from 'pinia'
import { onMounted, ref, reactive, watch, computed } from 'vue'
import axios from 'axios'
const url = 'https://ac5251367a557371.mokky.dev/'

export const useSneakersStore = defineStore('SneakersStore', () => {
    const items = ref([])
    const cart = ref([])
    const orders = ref([])
    const ordersItem = ref([])
    const isLoading = ref(false)
    const isDrawerOpen = ref(false)
    const filters = reactive({
        sortBy: '',
        searchQuery: ''
    })

    const addToCart = (item) => {
        if (!item.isAdded) {
            cart.value = [...cart.value, item]
            item.isAdded = !item.isAdded
        }
        else {
            cart.value.splice(cart.value.indexOf(item), 1);
            item.isAdded = !item.isAdded
        }
        localStorage.setItem('cart', JSON.stringify(cart.value));
    }
    const deleteFromCart = (item) => {
        const deleted = items.value.find(el => el.id === item.id)
        if (deleted) {
            deleted.isAdded = !deleted.isAdded
            cart.value.pop(deleted)
            localStorage.setItem('cart', JSON.stringify(cart.value))
        }
    }
    const addToFavorite = (item) => {
        const favorite = items.value.find(el => el.id === item.id)
        if (favorite) {
            favorite.isFavorite = !favorite.isFavorite
        }
    }
    const showFavorites = () => {
        return items.value.filter(el => el.isFavorite)
    }
    const showCart = () => {
        return cart.value.map(el => el)
    }

    const toggleDrawer = () => {
        isDrawerOpen.value = !isDrawerOpen.value
    }

    const onChangeSelect = (event) => {
        filters.sortBy = event.target.value
    }
    const onChangeSearchInput = (event) => {
        filters.searchQuery = event.target.value
    }
    const favcLength = computed(() => {
        if (showFavorites().length > 0) {
            return showFavorites().length
        }
    })
    const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
    const vatPrice = computed(() => Math.round(totalPrice.value * 0.05));

    const createOrders = async () => {
        try {
            isLoading.value = true

            const data = await axios.post(`https://ac5251367a557371.mokky.dev/orders`, {
                items: cart.value,
                totalPrice: totalPrice.value,
                orderDate: new Date()
            })
            items.value = items.value.map(item => {
                return {
                    ...item,
                    isAdded: item.isAdded === !item.isAdded
                };
            });
            console.log(new Date());
            cart.value = []
        } catch (error) {
            console.log(error);
        }
        finally {
            isLoading.value = false
        }

    }

    const fetchItem = async () => {
        try {
            const params = {
                sortBy: filters.sortBy
            }
            if (filters.searchQuery) {
                params.title = `*${filters.searchQuery}*`
            }
            const { data } = await axios.get(`https://ac5251367a557371.mokky.dev/sneakers`, { params })
            items.value = data
        } catch (error) {
            console.log(error);
        }
    }

    const fetchOrders = async () => {
        try {
            const { data } = await axios.get(`https://ac5251367a557371.mokky.dev/orders`)
            orders.value = data
            console.log(orders.value);
        } catch (error) {
            console.log(error);
        }
    }

    onMounted(async () => {
        cart.value = JSON.parse(localStorage.getItem('cart')) || []
        await fetchItem()
        await fetchOrders()
        cart.value.forEach(item => {
            const foundItem = items.value.find(el => el.id === item.id)
            if (foundItem) {
                foundItem.isAdded = true
            }
        })
    })
    watch(filters, () => fetchItem)
    watch(orders, () => fetchOrders)

    watch(cart, () => {
        localStorage.setItem('cart', JSON.stringify(cart.value));
    });
    return {
        items,
        orders,
        isDrawerOpen,
        toggleDrawer,
        onChangeSelect,
        onChangeSearchInput,
        fetchItem,
        addToFavorite,
        addToCart,
        totalPrice,
        vatPrice,
        isLoading,
        favcLength,
        ordersItem,
        showFavorites,
        showCart,
        fetchOrders,
        deleteFromCart,
        createOrders,
    }
})
