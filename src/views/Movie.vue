<script setup>
import axios from 'axios';
import { ref, onMounted, reactive } from 'vue'
import { Icon } from '@iconify/vue'


const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

const mealsData = reactive({
    meals: []
})

const mealsName = ref([])

const fetchData = async () => {
    const res = await axios.get(url)
    const data = res.data
    mealsName.value = data.meals

    // console.log(res)
    // console.log(data)    
    console.log(mealsName.value)

}

onMounted(() => {
    fetchData()
})




</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <h3 class="text-xl">Gallery movie</h3>
        <Icon
        icon="icon-park-twotone:apple-one"
        />
    </div>
</template>