<template>
  <div class="body">
    <div class="name flex">{{FIR.getFoodName()}} ({{FIR.count}})</div>
    <div class="rawCost flex">{{Localization.Currency}} {{FIR.itemCost()}}</div>
    <div class="serviceCost flex">{{Localization.Currency}} {{FIR.itemCostServiceFee(this.serviceFee).toFixed(2)}}</div>
  </div>
</template>

<script>
export default {
    props:["FIR","Localization","serviceFee"]
}
</script>

<style scope>
  .body{
    width: 100%;
  }
  .body:nth-child(even){
    background-color: var(--darkGrey);
  }
  .flex{
    display: inline-flex;
    font-size: 0.9rem;
    /* justify-content: ; */
  }
  .name{
    width: 65%;
  }
  .rawCost{
    width: 17.5%;
  }
  .serviceCost{
    width: 17.5%;
  }
</style>