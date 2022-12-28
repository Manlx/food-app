<template>
    <div>
        <p class="inline" v-for="item,index in this.Keys" :key="index" :style="{ 'width': Sizing[index] + '%' }">{{ this.displayData[item] }}</p>
        <p class="inline" v-for="item,index in this.Funcs" :key="index" :style="{ 'width': Sizing[index] + '%' }">{{ this.displayData[item] }}</p>
    </div>
</template>

<script lang="js">
export default {
    props:["displayData","Keys","Sizing","Funcs"],
    mounted:function(){
        console.log( JSON.stringify(this.displayData)) 
        console.log( JSON.stringify(this.Funcs)) 
        console.log(this.displayData[this.Funcs[0]])
    }
}
</script>

<style scoped>
    .inline{
        display: inline-block;
    }
</style>
