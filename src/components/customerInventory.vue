<template>
  <div>
    <div class="FIDisp"  >
      <p class="FIDispName">{{FIin.foodItem.ProdName}} ({{FIin.count}})</p>
      <p class="FIDispCost">{{this.Localization.Currency}} {{FIin.itemCost()}}</p>
      <div class="button addButton" @click="this.addProd"></div>
      <div class="button decreaseButton" @click="this.decreaseProd"></div>
      <div class="button removeButton" @click="this.removeProd"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:["FIin","Localization","User"],
  methods:{
    addProd:function(){
      this.User.addProduct(this.FIin.foodItem);
    },
    decreaseProd:function(){
      this.User.reduceProd(this.FIin.foodItem);
    },
    removeProd:function(){
      this.User.removeProd(this.FIin.foodItem);
    }
  },
  mounted:function(){
    console.log(JSON.stringify(this.FIin))
  }
}
</script>

<style scoped>

  .FIDispHolder{
    padding: 2% 2%;
  }

  .FIDispName{
    display: inline-flex;
    width: 50%;
  }

  .FIDispCost{
    display: inline-flex;
    width: 20%;
  }

  .FIDisp{
    height: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .FIDisp:nth-child(odd)
  {
    background-color: #343434;
  }

  p{
    font-size: 1rem;
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

  .removeButton{
    background-image: url('https://www.svgrepo.com/show/207510/cancel.svg');
  }
</style>