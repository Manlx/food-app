<template>
  <div>
    <div class="itemsHolder" :class="{compressed:!this.collapsed}" @click="this.collapsed = !this.collapsed">
        Expand Food Items
    </div>
    <div class="itemsHolder" :class="{compressed:this.collapsed}">
        <div class="foodItemContainer">
            <food-item-display :class="{compressed:addItems}" v-for="item,index in this.FoodIn" :key="index" :FoodData="item" :Localization="this.Localization" @removedClick="this.removeItem" />
        </div>
        
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
            collapsed:true,
            addItems:false,
            prodID:"",
            prodCost:0
        }
    },
    props:["FoodIn","Localization"],
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

    .OptionsHolder{
        display: flex;
        /* width: 100%; */
        justify-content: space-around;
        
    }

    .addItemBox{
        display: flex;
        flex-direction: column;
        width: 100%;
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
        width: 100%;
        justify-content: space-evenly;
    }

    .foodItemContainer{
        width: 100%;
        border-radius: 1vw;
        background-color: var(--darkGrey);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1vh;
        padding: 1% 0%;
    }
</style>