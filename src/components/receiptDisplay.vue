<template>
  <collapse-box :dispTitle="'Expand to Receipt'" :onExpand="this.createPrdCllct">
    <receipt-item-display :Localization="this.Localization" :serviceFee="this.serviceFee" v-for="item,index in this.FIRlist.FIRArr" :key="index" :FIR="item"/>
    <total-display-comp :localization="this.Localization" :serviceFee="this.serviceFee" :rawTotal="this.rawTotal" />
    <button-group :btnTitles="[`Alphabetical`,`Count`,'Cost']" :btnMethods="[()=>{this.FIRlist.sortAlpha()},()=>{this.FIRlist.sortCount()},() =>{this.FIRlist.sortCost()}]" :marginSetting="'1% 0% 1% 0%'"/>
    
  </collapse-box>
</template>

<script>
import foodItemRegsList from '@/classes/foodItemRegsList'
import collapseBox from './collapseBox.vue'
import ReceiptItemDisplay from './receiptItemDisplay.vue'
import ButtonGroup from './buttonGroup.vue'
import TotalDisplayComp from './totalDisplayComp.vue'
export default {
  components: { collapseBox, ReceiptItemDisplay, ButtonGroup, TotalDisplayComp },
  data:function(){
    return {
        FIRlist: new foodItemRegsList(),
        rawTotal:-1,
        bigTotal:-1
    }
  },
  props:["userData","Localization","serviceFee"],
  methods:{
    createPrdCllct:function(){
        let FIRlist = new foodItemRegsList()
        this.userData.forEach(User => {
            User.foodList.FIRArr.forEach(FIR => {
                FIRlist.AddFI(FIR.foodItem,FIR.count)
            });
        });
        this.FIRlist = FIRlist;
        this.rawTotal = this.FIRlist.calcCost();
    }
  },
  updated:function(){
    this.createPrdCllct();
  }
}
</script>

<style scoped>

</style>