<template>
  <div class="body">
    <div class="Name">
      {{this.FoodData.ProdName}}
    </div>
    <div class="Cost">
      {{this.Localization.Currency}}{{this.FoodData.ProdPrice}}
    </div>
    <div class="removeButton" @click="this.removeClick"></div>
  </div>
</template>

<script>
export default {
    props:["FoodData","Localization"],
    methods:{
      removeClick:function(){
        if (!confirm("Removing will remove it from customer orders"))
          return;
        this.$emit("removedClick",this.FoodData)
      }
    }
}
</script>

<style scoped>
  .body{
    padding: 2% 0%;
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--medGrey);
    border-radius: 1vw;
  }
  .body:nth-child(odd){
    background-color: var(--darkGrey);
  }

  .removeButton{
    background-image: var(--removeButtonSVG);
    /* width: 4vh; */
    height: 100%;
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    display: inline-flex;
    transition: 1s;
  }

  .removeButton:hover{
    background-color: brown;
    border-radius: 10px;
  }

  .Name{
    width: 60%;
  }

  .Cost{
    width: 20%;
  }
</style>