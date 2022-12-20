<template>
  <div>
    <div class="options">
      <div class="titleOptionHolder">
        <h1>Currency:</h1>
        <select name="" id="" v-model="this.localization.Currency">
          <option v-for="(item,key,index) in this.Currencies" :key="index" :value="item" >{{key}}</option>
        </select>
      </div>
      <div class="titleOptionHolder">
        <h1>Predefined:</h1>
        <select name="" id="" v-model="this.selectedPredata" @change="this.selectPreDefValues">
          <option v-for="(item,key,index) in this.Predata" :key="index" :value="item" >{{key}}</option>
        </select>
      </div>
      <div class="titleOptionHolder">
        <h1>Service Fee (%):</h1>
        <input type="number" v-model="this.serviceFee">
      </div>
    </div>
    <add-food-item :FoodIn="this.foodItems" :Localization="this.localization" @RemoveFoodItem="this.removeFoodItem" @AddedItem="this.addFoodItem"/>
    <customer-management @removeSelectedUser="this.removeUser" :UsersData="this.customers" :Localization="this.localization" @addUserClick="this.addCustomer" :SerivceFee="this.serviceFee" :products="this.foodItems"/>
  </div>
</template>

<script>
import addFoodItem from './components/addFoodItem.vue'
import ButtonComp from './components/buttonComp.vue';
import ButtonGroup from './components/buttonGroup.vue';
import CollapseBox from './components/collapseBox.vue';
import CustomerManagement from './components/customerManagement.vue';
import horseFood from "./data/horseFood.json";
import importedCurrencies from "./data/currencies.json"

export default {
  components: { addFoodItem, CustomerManagement, CollapseBox, ButtonComp, ButtonGroup },
  name: 'App',
  data:function()
  {
    return {
      btnTitles:["Gaming","Gamers","Perd"],
      btnMeth:[()=>{alert("Gaming Gamers")},()=>{alert("Say my name")},()=>{confirm("Happy Now?")}],
      foodItems:[],
      customers:[],
      serviceFee:0,
      Currencies:importedCurrencies,
      localization:{
        Currency:"R"
      },
      Predata: {
        "Horse And River":"horseFood.json",
        "None":""
      },
      selectedPredata:""
    }
  },
  mounted: function(){
    // this.customers.push(new customer("Jaco"))
    // this.customers.push(new customer("Pieter"))
    // this.customers[0].foodList.AddFI(this.foodItems[0]);
    // this.customers[0].foodList.AddFI(this.foodItems[1]);
    // this.customers[0].foodList.AddFI(this.foodItems[2]);
    // this.customers[0].foodList.AddFI(this.foodItems[2]);
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
    selectPreDefValues:function(){
      if (this.selectedPredata == "")
        return;
      
      switch (this.selectedPredata){
        case "horseFood.json":
          this.deepCopyFood(horseFood.foodItems)
        break;
      }
    },
    deepCopyFood:function(FoodIN)
    {
      for( let i = 0; i < this.foodItems.length;i++)
      {
        this.foodItems.pop();
      }
      for (let i = 0; i < FoodIN.length;i++)
        this.foodItems.push(FoodIN[i])
    }
  }
}
</script>

<style >

  .options{
    display: flex;
    flex-direction: column;
    padding: 3% 3%;
    background-color: var(--medGrey);
    margin: 3% 1% 0 1%;
    border-radius: 1vw;
  }

  .titleOptionHolder{
    display: flex;
    width: 100%;
    margin: 2% 0%;
    align-content: space-between;
    /* justify-content: center; */
    align-items: center;
  }

  .titleOptionHolder h1{
    width: 60%;
    font-size: 1rem;
  }

  .titleOptionHolder select{
    width: 60%;
    border:none;
    /* background-color: var(--darkGrey); */
    background-color: var(--buttonPurple);
    text-align: center;
  }

  .titleOptionHolder input{
    display: flex;
    width: 60%;
    border: none;
    /* padding: 0; */
    text-align: center;
    /* background-color: var(--darkGrey); */
    background-color: var(--buttonPurple);
  }

  option{
    font-size: 1rem;
  }

  .minimizeBox{
    padding: 2% 5%;
    background-color: var(--buttonPurple);
    border-radius: 1vw;
    transition: 1s;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .OptionsHolder{
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .itemsHolder{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--medGrey);
    padding: 1% 1%;
    border-radius: 1vw;
    margin: 1% 1%;
  }
</style>