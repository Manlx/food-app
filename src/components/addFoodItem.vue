<template>
  <div>
    <div class="titleHolder" :class="{compressed:!this.collapsed}" @click="this.collapsed = !this.collapsed">
        Expand Food Items
    </div>
    <div class="itemsHolder" :class="{compressed:this.collapsed}">
        <!-- <span> -->
        <food-item-display v-for="item,index in this.FoodIn" :key="index" :FoodData="item" :Localization="this.Localization" @removedClick="this.removeItem" />
        <div class="minimizeBox" @click="this.collapsed = !this.collapsed">
            Collapse
        </div>
            
        <!-- </span> -->
    </div>
  </div>
</template>

<script>
import foodItemDisplay from './foodItemDisplay.vue'
export default {
  components: { foodItemDisplay },
    data:function(){
        return {
            collapsed:true
        }
    },
    props:["FoodIn","Localization"],
    mounted:function(){
        console.log(this.FoodIn)
    },
    methods:{
        removeItem:function(Item){
            this.$emit("RemoveFoodItem",Item)
        }
    }
}
</script>

<style scoped>
    .titleHolder{
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #454545;
        padding: 5% 5%;
        border-radius: 30px;
        border: #565656 solid 10px;
    }

    .itemsHolder{
        font-size: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #454545;
        padding: 5% 5%;
        border-radius: 30px;
        border: #565656 solid 20px;
    }

    .minimizeBox{
        font-size: 2rem;
        padding: 3% 3%;
        border: #232323 solid 20px;
        background-color: #121212;
        border-radius: 30px;
        transition: 1s;
    }

    .minimizeBox:hover{
        background-color: #787878;
        color: white;
    }

    .compressed{
        display: none;
    }
</style>