<template>
  <div>
    <div class="titleHolder" :class="{compressed:!this.collapsed}" @click="this.collapsed = !this.collapsed">
        Expand Food Items
    </div>
    <div class="itemsHolder" :class="{compressed:this.collapsed}">
        <food-item-display :class="{compressed:addItems}" v-for="item,index in this.FoodIn" :key="index" :FoodData="item" :Localization="this.Localization" @removedClick="this.removeItem" />
        <div class="OptionsHolder" :class="{compressed:addItems}">
            <div class="minimizeBox" @click="this.addItems = !this.addItems">
                Add Item
            </div>
            <div class="minimizeBox" @click="this.collapsed = !this.collapsed">
                Collapse
            </div>
        </div>
        <div class="addItemBox" :class="{compressed:!this.addItems}">
            <div class="AddItemSegment">
                <label for="ProdID">Name:</label>
                <input type="text" id="ProdID" v-model="this.prodID">
            </div>
            <div class="AddItemSegment">
                <label for="ProdCost">Cost:</label>
                <input type="number" id="ProdCost" v-model="this.prodCost">
            </div>
            <div class="addItemButtonHolder">
                <div class="minimizeBox" @click="this.addItemClick">Add Item</div>
                <div class="minimizeBox" @click="this.addItems = !this.addItems">Cancel</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import foodItemDisplay from './foodItemDisplay.vue'
import foodItem from "../classes/foodItem.js"

export default {
  components: { foodItemDisplay },
    data:function(){
        return {
            collapsed:false,
            addItems:true,
            prodID:"",
            prodCost:0
        }
    },
    props:["FoodIn","Localization"],
    mounted:function(){
        console.log(this.FoodIn)
    },
    methods:{
        removeItem:function(Item){
            this.$emit("RemoveFoodItem",Item)
        },
        addItemClick:function(){
            let FoodItemOut = new foodItem(this.prodID,this.prodCost);
            this.prodID = "";
            this.prodCost = 0;
            this.addItems = !this.addItems;
            this.$emit("AddedItem",FoodItemOut);
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
        padding: 2% 2%;
        border-radius: 30px;
        border: #565656 solid 2vw;
        margin: 2% 2%;
    }

    .minimizeBox{
        font-size: 1.2rem;
        /* padding: 1% 3%; */
        padding: 1% 5%;
        border: #232323 solid 2vw;
        background-color: #121212;
        border-radius: 10px;
        transition: 1s;
    }

    .minimizeBox:hover{
        background-color: #787878;
        color: white;
    }

    .OptionsHolder{
        display: flex;
        width: 100%;
        /* justify-content: center; */
        /* background-color: aqua; */
        justify-content: space-between;
    }

    .addItemBox{
        display: flex;
        flex-direction: column;
    }

    .compressed{
        display: none;
    }

    .AddItemSegment{
        width: 100%;
        display: flex;
    }

    input{
        background-color: #232323;
        width: 96%;
        margin: 1% 2%;
    }

    .addItemButtonHolder{
        margin: 1% 0%;
        display: flex;
        justify-content: space-between;
    }

</style>