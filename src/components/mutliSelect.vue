<template>
    <div class="mutliSelectBigBod">
        <div v-for="bool,index in this.CheckedArr" type="checkbox" :key="index" class="mutliSelectBody">
            <input type="checkbox" v-model="this.CheckedArr[index]" @change="this.incSubmitData">
            <label for="">{{ this.arr[index] }}</label>
        </div>
        <button-group v-if="this.useSubButton" :btnTitles="['Complete']" :btnMethods="[this.submitDataClick]" :marginSetting="`1vw 0.5vw`" />
    </div>
    
</template>

<script>
import buttonGroup from './buttonGroup.vue';
export default {
  components: { buttonGroup },
    props:["arr","height","useSubButton"],
    data:function(){
        return {
            CheckedArr:[]
        }
    },
    mounted:function(){
        this.CheckedArr = [];
        for (let i = 0; i < this.arr.length;i++)
            this.CheckedArr.push(true);
    },
    methods:{
        submitDataClick:function(){
            let SelectedData = [];
            for (let i = 0; i < this.CheckedArr.length;i++)
                if (this.CheckedArr[i])
                    SelectedData.push(this.arr[i]);
            this.$emit("submitClick",SelectedData);
        },
        incSubmitData:function(){
            if (this.useSubButton)
                return;
            let SelectedData = [];
            for (let i = 0; i < this.CheckedArr.length;i++)
                if (this.CheckedArr[i])
                    SelectedData.push(this.arr[i]);
            this.$emit("incSubmit",SelectedData);
        }
    },
    emits:["submitClick","incSubmit"]
}
</script>

<style scoped>
    input{
        width: 1rem;
        height: 1rem;
        
    }
    .mutliSelectBody{
        display: inline-flex;
        margin: 0.5% 2%;
    }
    .mutliSelectBigBod{
        display: flex;
        flex-wrap: wrap;;
        justify-content: center;
        align-items: center;

        /* grow */
    }
</style>