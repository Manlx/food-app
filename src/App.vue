<template>
  <div>
    <div class="options">
      <div class="optionHolder">
        <h1>Currency:</h1>
        <select name="" id="" v-model="this.localization.Currency">
          <option value="R">ZAR</option>
          <option value="$">US</option>
          <option value="€">EU</option>
        </select>
      </div>
      
      <div class="optionHolder">
        <h1>Service Fee (%):</h1>
        <input type="number">
      </div>
      
    </div>
    
   <add-food-item :FoodIn="this.foodItems" :Localization="this.localization" @RemoveFoodItem="this.removeFoodItem"/>
  </div>
</template>

<script>
import addFoodItem from './components/addFoodItem.vue'
import FoodData from "./data/food.json"
import customer from "./classes/customerClass.js";
export default {
  components: { addFoodItem },
  name: 'App',
  data:function()
  {
    return {
      foodItems:FoodData.foodItems,
      customers:[],
      localization:{
        Currency:"R"
      }
    }
  },
  mounted: function(){
    this.customers.push(new customer())
    this.customers[0].foodList.AddFI(this.foodItems[0]);
  },
  methods:{
    removeFoodItem:function(item){
      this.customers.forEach(cust => {
        cust.foodList.Delete(item);
      });
      this.foodItems.splice( this.foodItems.indexOf(item),1)
    }
  }
}
</script>

<style scoped>
  h1{
    display: inline;
    background-color: inherit;
    font-size: 1.1rem;
    margin: 0% 5%;
  }

  .options{
    display: flex;
    flex-direction: column;
    padding: 3% 3%;
    background-color: #452323;
    margin: 3% 3%;
    border-radius: 20px;
  }

  select{
    background-color: #232323;
    padding: 0% 3%;
    margin: 0% 3%;
  }

  input{
    font-size: 1rem;
    width: 100%;
    background-color: #232323;
    height: 100%;
  }

  .optionHolder{
    display: flex;
    width: 100%;
    margin: 2% 0%;
    /* justify-content: center; */
    align-items: center;
  }
</style>