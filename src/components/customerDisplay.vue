<template>
  <div class="body">
    <div class="OveralDisplay" :class="{minimized:this.minimized}" @click="this.minimized = !this.minimized">
      <div class="NamDisp"><p>{{userData.name}}</p></div>
      <div class="CurrencyDisp"><p>{{this.Localization.Currency+" "}}{{(userData.calcCost()*((100+this.serviceFee)/100)).toFixed(2) }}</p></div>
      <div class="removeButton" @click="this.removeUser"></div>
    </div>
    <div class="FIDispHolder" :class="{minimized:!this.minimized}">
      <customer-inventory v-for="FI,index in userData.foodList.FIRArr" :FIin="FI" :key="index" :Localization="this.Localization" :User="this.userData" />
      <div class="optionsButton">
        <label for="foodItemSelect">Item :</label>
        <select id="foodItemSelect" v-model="this.selectedProd">
          <option v-for="item,index in this.products" :key="index" :value="index">{{item.ProdName}}</option>
        </select>
        <div class="button addButton" @click="this.addProduct"></div>
      </div>
    </div>
  </div>
  
</template>

<script>
import customerInventory from './customerInventory.vue';
export default {
  components: { customerInventory },
    props:["userData","Localization","serviceFee","products"],
    mounted:function(){
      // console.log(JSON.stringify(this.userData))
    },
    methods:{
      removeUser:function(){
        if (!confirm("Are you sure?"))
          return;
        this.$emit("removeUser",this.userData);
      },
      addProduct:function(){
        let Prod = this.products[this.selectedProd];
        this.userData.addProduct(Prod);
        // this.$emit("AddProduct",user,Prod)
      },
      decreaseProd:function(){
        reduceProd
      }
    },
    data:function(){
      return {
        minimized:false,
        selectedProd:0
      }
    }
}
</script>

<style scoped>
  .removeButton{
    background-image: url('https://www.svgrepo.com/show/207510/cancel.svg');
    height: 100%;
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    display: inline-flex;
    /* margin: 0% 0%; */
    transition: 1s;
  }

  .removeButton:hover{
    /* background-color: brown; */
    border-radius: 10px;
  }
  
  .NamDisp{
    display: inline-flex;
    /* background-color: aquamarine; */
    width: 50%;
  }

  .CurrencyDisp{
    display: inline-flex;
    /* background-color: blueviolet; */
    width: 30%;
  }

  p{
    font-size: 1rem;
  }

  .body{
    background-color: #232323;
    padding: 0% 2%;
    border-radius: 10px;
    margin: 2% 0%;
  }

  .body:hover{
    background-color: #343434;
  }

  .minimized{
    display: none;
  }

  .button{
    height: 100%;
    aspect-ratio: 1/1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80% 80%;
    transition: 1s;
    border-radius: 10px;
    /* margin: 1%; */
  }

  .button:hover{
    /* background-color: ghostwhite; */
    scale: 1.3;
  }

  .addButton{
    background-image: url('https://www.svgrepo.com/show/207531/plus.svg');
    
  }

  .decreaseButton{
    background-image: url('https://www.svgrepo.com/show/207550/minus.svg');
  }

  select{
    background-color: #232323;
    font-size: 1rem;
    display: inline-flex;
    margin-left: 2%;
    margin-right: 2%;
  }

  label{
    font-size: 1rem;
  }

  option{
    font-size: 1rem;
  }

  .OveralDisplay{
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .optionsButton{
    height: 1.5rem;
    display: flex;
    align-items: center;
    width: 96%;
    /* background-color: darkslategray; */
    /* padding: 0% 2%; */
  }
</style>