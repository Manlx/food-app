<template>
    <div class="bigBody">
        <h1>{{ this.GroupTitle }}</h1>
        <stats-group-item v-for="item,index in this.DataGroup" :key="index" :displayData="(item.foodItem)" :Keys="this.Keys" :Sizing="this.Sizing" :Funcs="this.Funcs"/>
    </div>
</template>

<script lang="js">
import statsGroupItem from "./statsGroupItem.vue"
export default {
    props:["DataGroup","GroupTitle","Keys","Sizing","Funcs"],
    data:()=>{
        return {}
    },
    components:{statsGroupItem},
    mounted:function(){
        console.log(JSON.stringify(this.DataGroup) )
    }
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