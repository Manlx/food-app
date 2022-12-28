<template>
  <collapse-box :darken="false" :dispTitle="'Stats'">
    <!-- <p>{{ this.CompleteFoodList }}</p> -->
    <stats-group :DataGroup="this.HighestCost" :GroupTitle="`Highest Cost`" :Sizing="this.Sizing"/>
  </collapse-box>
</template>

<script>
import collapseBox from './collapseBox.vue'
import StatsGroup from './statsGroup.vue'
import foodItemRegs from './../classes/foodItemRegs.js'

export default {
  data:function(){
    return {
      HighestCost:[],
      LeastBought:[],
      MostBought:[],
      AccessKeys:[foodItemRegs.toString],
      Sizing:["60"]
    }
  },
  components: { collapseBox, StatsGroup },
  props:["CompleteFoodList","CustomerList"],
  updated:function(){
    if (this.CompleteFoodList == null || this.CompleteFoodList == [])
      return;
    this.HighestCost = this.CompleteFoodList.getGroupBy(
      (a,b)=>{ return a.itemCost() > b.itemCost()},
      (a,b)=>{return a.itemCost() == b.itemCost()}
    )
    this.LeastBought = this.CompleteFoodList.getGroupBy(
      ({count:a},{count:b}) => {return a> b},
      ({count:a},{count:b}) => {return a == b}
    )
  }
}
</script>

<style scoped>

</style>