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
        <input type="number" v-model="this.serviceFee">
      </div>
      
    </div>
    
    <add-food-item :FoodIn="this.foodItems" :Localization="this.localization" @RemoveFoodItem="this.removeFoodItem" @AddedItem="this.addFoodItem"/>
    <customer-management @removeSelectedUser="this.removeUser" :UsersData="this.customers" :Localization="this.localization" @addUserClick="this.addCustomer" :SerivceFee="this.serviceFee" :products="this.foodItems" @addProd="this.addProdToCust"/>
  </div>
</template>

<script>
import addFoodItem from './components/addFoodItem.vue'
import FoodData from "./data/food.json"
import customer from "./classes/customerClass.js";
import CustomerManagement from './components/customerManagement.vue';

export default {
  components: { addFoodItem, CustomerManagement },
  name: 'App',
  data:function()
  {
    return {
      foodItems:FoodData.foodItems,
      customers:[],
      serviceFee:0,
      localization:{
        Currency:"R"
      }
    }
  },
  mounted: function(){
    this.customers.push(new customer("Jaco"))
    this.customers.push(new customer("Pieter"))
    this.customers[0].foodList.AddFI(this.foodItems[0]);
    this.customers[0].foodList.AddFI(this.foodItems[1]);
    this.customers[0].foodList.AddFI(this.foodItems[2]);
    this.customers[0].foodList.AddFI(this.foodItems[2]);
  },
  methods:{
    removeFoodItem:function(item){
      this.customers.forEach(cust => {
        cust.foodList.Delete(item);
      });
      this.foodItems.splice( this.foodItems.indexOf(item),1)
    },
    addFoodItem:function(item){
      this.foodItems.push(item)
    },
    removeUser:function(User){
      for (let i = 0;i < this.customers.length;i++)
      {
        if (this.customers[i].equals(User))
          this.customers.splice(i,1)
      }
    },
    addCustomer:function(User){
      this.customers.push(User)
    },
    addProdToCust:function(user,prod){

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
    font-size: 1rem;
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

  option{
    font-size: 1rem;
  }
</style>