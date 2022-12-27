<template>
    <div>
        <p class="inline" v-for="item,index in this.Keys" :key="index" :style="{ 'width': Sizing[index] + '%' }">{{ this.displayData[item] }}</p>
    </div>
</template>

<script lang="js">
export default {
    props:["displayData","Keys","Sizing"]
}
</script>

<style scoped>
    .inline{
        display: inline-block;
    }
</style>