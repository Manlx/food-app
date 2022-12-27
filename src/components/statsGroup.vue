<template>
    <div class="bigBody">
        <h1>{{ this.GroupTitle }}</h1>
        <stats-group-item v-for="item,index in this.DataGroup" :key="index" :displayData="item" :Keys="" :Sizing="" />
    </div>
</template>

<script lang="js">
import statsGroupItem from "./statsGroupItem.vue"
export default {
    props:["DataGroup","GroupTitle"],
    data:()=>{
        return {}
    },
    components:{statsGroupItem}
}
</script>

<style scoped>
    h1{
        font-size: 1.5rem;
    }

    .bigBody{
        width: 100%;
    }
</style>