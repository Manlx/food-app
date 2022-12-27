<template>
  <collapse-box :darken="false" :dispTitle="'Stats'">
    <!-- <p>{{ this.CompleteFoodList }}</p> -->
    <stats-group :DataGroup="this.HighestCost" :GroupTitle="`Highest Cost`"/>
  </collapse-box>
</template>

<script>
import collapseBox from './collapseBox.vue'
import StatsGroup from './statsGroup.vue'
export default {
  data:()=>{
    return {
      HighestCost:[],
      LeastBought:[],
      MostBought:[],
    }
  },
  components: { collapseBox, StatsGroup },
  props:["CompleteFoodList","CustomerList"],
  updated:function(){
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