<script>

const {name,menu} = props
export default class listMenuSidebar extends Vue{
    name = name
    menu = menu
}

</script>

<template>

<div class="p-3 items-center justify-center flex text-white font-semibold">
    <v-icon {{ name }}/>
    <h1>{{ menu }}</h1>
</div>

</template>