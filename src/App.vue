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
      <div class="titleOptionHolder">
        <h1>AutoSave:</h1>
        <select name="" id="" v-model="this.autoSaveTime" @change="this.onAutoSaveChange">
          <option v-for="(item,index) in this.autoSaveTimes.Times" :key="index" :value="item.Amount" >{{item.Descript}}</option>
        </select>
      </div>
    </div>
    <add-food-item :FoodIn="this.foodItems" :Localization="this.localization" @RemoveFoodItem="this.removeFoodItem" @AddedItem="this.addFoodItem"/>
    <customer-management @removeSelectedUser="this.removeUser" :UsersData="this.customers" :Localization="this.localization" @addUserClick="this.addCustomer" :SerivceFee="this.serviceFee" :products="this.foodItems"/>
    <receipt-display :userData="this.customers" :Localization="this.localization" :serviceFee="this.serviceFee"/>
    <button-group v-if="this.autoSaveTime == -1" :btnTitles="[`Save`,`Load`,`Clear`]" :btnMethods="[this.serializeData,this.deserializeData,this.clearSavedData]"/>
  </div>
</template>

<script>
import addFoodItem from './components/addFoodItem.vue'
import ButtonComp from './components/buttonComp.vue';
import ButtonGroup from './components/buttonGroup.vue';
import CollapseBox from './components/collapseBox.vue';
import CustomerManagement from './components/customerManagement.vue';
import ReceiptDisplay from './components/receiptDisplay.vue';

import customer from "./classes/customerClass.js";
import DataManager from "./classes/dataManagement.js";
import foodItem from "./classes/foodItem.js";

import horseFood from "./data/horseFood.json";
import importedCurrencies from "./data/currencies.json"
import autoSaveTimes from "./data/autoSaveTimes.json"

export default {
  components: { addFoodItem, CustomerManagement, CollapseBox, ButtonComp, ButtonGroup, ReceiptDisplay },
  name: 'App',
  data:function()
  {
    return {
      DManager: new DataManager(),
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
      selectedPredata:"",
      autoSaveTime:30000,
      autoSaveTimes: autoSaveTimes,
      autoSaveCall:null,
      debugMode:false
    }
  },
  mounted: function(){
    // this.selectPreDefValues();
    // this.customers.push(new customer("Jaco"))
    // this.customers.push(new customer("Pieter"))
    
    // this.customers[0].foodList.AddFI(this.foodItems[1]);
    // this.customers[0].foodList.AddFI(this.foodItems[2]);
    // this.customers[0].foodList.AddFI(this.foodItems[2]);
    // this.customers[0].foodList.AddFI(this.foodItems[0]);
    // this.deserializeData();
    if (this.DManager.checkForValidSave())
      if( confirm("Saved Data Detected Proceed to Load?"))
        this.deserializeData();
    this.onAutoSaveChange();
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
          {
            foodItem.IDGen = horseFood.foodItems.length;
            this.deepCopyFood(horseFood.foodItems)
          }
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
    },
    serializeData:function(){
      let CombinedObj = {
        foodItems: this.foodItems,
        customers: this.customers,
        serviceFee: this.serviceFee,
        selectedPredata: this.selectedPredata
      }
      console.log("Saving Data")
      this.DManager.storedData(CombinedObj);
      this.DManager.getStoredData();
    },
    deserializeData:function(){
      if (this.DManager.getStoredData())
      {
        if (this.DManager.latestStored.length < 5)
          return;
        let temp = JSON.parse(this.DManager.latestStored);
        this.selectedPredata = temp.selectedPredata;
        this.customers = temp.customers;
        this.foodItems = temp.foodItems;
        this.serviceFee = temp.serviceFee;
        // console.log(this.customers);
        this.customerReconstruction();
        // console.log(JSON.stringify(this.foodItems))
        console.log("Loading Data");
      }
    },
    clearSavedData:function(){
      console.log("Clearing Data")
      this.DManager.clearData()
    },
    customerReconstruction:function(){
      let Cust = [];
      let self = this;
      this.customers.forEach((custo) =>{
        let tempCust = new customer(custo.name)
        
        custo.foodList.FIRArr.forEach((FIR)=>{
          tempCust.addProduct(self.findFoodItemByID(FIR.foodItem.ProdID),FIR.count)
        })
        Cust.push(tempCust);
      })
      this.customers = Cust;
    },
    findFoodItemByID(ID){
      for (let i = 0;i < this.foodItems.length;i++)
        if (this.foodItems[i].ProdID == ID)
          return this.foodItems[i];
      return null;
    },
    onAutoSaveChange:function(){
      if (this.autoSaveCall != null)
        clearInterval(this.autoSaveCall)

      if (this.autoSaveTime == -1) 
        return;
      this.autoSaveCall = setInterval(this.serializeData,this.autoSaveTime);
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