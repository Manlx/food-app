<template>
  <div class="btn" :style="{width : this.btnWidth}">
    <p>{{this.BtnDisplay}}</p>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            btnWidth:this.givenWidth
        }
    },
    mounted:function(){
        if (!this.btnWidth)
            this.btnWidth = "20%"
    },
    props:["BtnDisplay","givenWidth"]
}
</script>

<style>
    .btn{
        background-color: var(--buttonPurple);
        padding: 2% 0%;
        border-radius: 1vw;
        transition: 1s;
    }
    .btn p {
        width: 100%;
        text-align: center;
    }
    .btn:hover{
        scale: 1.05;
        filter: brightness(150%);
    }
</style>