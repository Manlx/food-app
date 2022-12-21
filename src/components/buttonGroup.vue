<template>
    <div class="btnGroup" :style="this.styles">
        <button-comp v-for="title,index in this.btnTitles" :key="index" :BtnDisplay="title" @click="this.btnMethods[index]" :givenWidth="`${this.calcBtnWidth()}%`"/>
    </div>
</template>

<script>
import buttonComp from './buttonComp.vue'
export default {
    methods:{
        calcBtnWidth:function(){
            console.log((100 -this.btnTitles.length*this.gapSize)/this.btnTitles.length);
            return (100 -this.btnTitles.length*this.gapSize)/this.btnTitles.length ;
        }
    },
    data:function(){
        return {
            styles:{
                margin: this.marginSetting
            },
            gapSize:2
        }
    },
    components: { buttonComp },
    props:["btnTitles","btnMethods","marginSetting"]
}
</script>

<style scoped>
    .btnGroup{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
</style>