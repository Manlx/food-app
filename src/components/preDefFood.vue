<template>
    <collapse-box :darken="true" :dispTitle="`Show Available Menus`" :noMargin="true" :startOpen="true">
      <div class="body">
        <select name="" id="">
          <option value="">
            
          </option>
        </select>
        <mutli-select v-if="this.selectedSubParts != []" :arr="this.selectedSubParts" :useSubButton="true"/>
      </div>
        
    </collapse-box>    
</template>

<script>
import collapseBox from './collapseBox.vue'
import MutliSelect from './mutliSelect.vue'
export default {
  components: { collapseBox, MutliSelect },
  props:["RestaurantLists"],
  data:function(){
    return {
      selectedSubParts:[]
    }
  },
  mounted:function(){
    
  }
}
</script>

<style scoped>
  .body{
  }
</style>