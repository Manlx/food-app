<template>
  <div>
    <collapse-box :dispTitle="`Expand Food Items`">
        <collapse-box :dispTitle="`View Food Items`" :darken="true" :marginSetting="`0% 0% 1% 0%`">
            <food-item-display v-for="item,index in this.FoodIn" :key="index" :FoodData="item" :Localization="this.Localization" @removedClick="this.removeItem" />
        </collapse-box>
        <collapse-box :dispTitle="`Add Food Item`" :darken="true" :marginSetting="`0% 0% 1% 0%`" ref="addItemClose">
            <div class="AddItemSegment">
                <label for="ProdID">Name:</label>
                <input type="text" id="ProdID" v-model="this.prodID">
            </div>
            <div class="AddItemSegment">
                <label for="ProdCost">Cost:</label>
                <input type="number" id="ProdCost" v-model="this.prodCost">
            </div>
            <button-group :btnTitles="[`Add Item`]" :btnMethods="[this.addItemClick]" :marginSetting="`0% 0% 1% 0%`"/>
        </collapse-box>
    </collapse-box>
  </div>
</template>

<script>
import foodItemDisplay from './foodItemDisplay.vue'
import foodItem from "../classes/foodItem.js"
import CollapseBox from './collapseBox.vue'
import ButtonGroup from './buttonGroup.vue'

export default {
  components: { foodItemDisplay, CollapseBox, ButtonGroup },
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
            this.$refs.addItemClose.toggle();
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