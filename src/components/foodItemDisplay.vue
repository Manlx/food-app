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
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .removeButton{
    background-image: url('https://www.svgrepo.com/show/12848/x-symbol.svg');
    width: 4vh;
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    display: inline-flex;
    /* margin: 0% 0%; */
    transition: 1s;
  }

  .removeButton:hover{
    background-color: brown;
    border-radius: 10px;
  }

  .Name{
    width: 60%;
    /* background-color: aquamarine; */
  }
  .Cost{
    width: 20%;
    /* background-color: brown; */
  }
</style>