<template>
    <div class="outerBox">
        <div class="dispBox" :class="this.dispBoxClass" :style="this.styles" v-if="this.collapsed" @click="this.toggle()">
            <p>{{this.dispTitle}}</p>
        </div>
        <div class="dispBox" :class="this.dispBoxClass" :style="this.styles" v-else>
            <slot />
            <button-group v-if="!this.hideButton" :btnMethods="this.controlMeths" :btnTitles="this.controlBtns"/>
        </div>
    </div>
</template>

<script>
import buttonGroup from './buttonGroup.vue'
export default {
  components: { buttonGroup },
    data:function(){
        return {
            collapsed:true,
            controlBtns:["Collapse"],
            controlMeths:[()=>{this.collapsed = !this.collapsed}],
            dispBoxClass:{
                noMargin: this.noMargin,
                noPadding: this.noPadding,
                dispBoxDarken: this.darken
            },
            styles:{
                margin: this.marginSetting
            }
        }
    },
    props:["dispTitle","noMargin","noPadding","darken","marginSetting","hideButton"],
    methods:{
        toggle:function(){
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style scoped>
    .outerBox{
        width: 100%;
    }
    .dispBox{
        display: flex;
        background-color:  var(--medGrey);
        margin: 1% 1%;
        padding: 1% 1%;
        border-radius: 1vw;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 1s;
    }
    .dispBoxDarken{
        background:linear-gradient(
          rgba(0,0,0,  0.3), 
          rgba(0,0,0, 0.3)
        ),transparent;
    }
    .dispBox:hover{
        background-color: var(--lighterGrey);
    }
    p{
        width: 100%;
        text-align: center;
    }
    .noMargin{
        margin: 0;
    }
    .noPadding{
        padding: 0;
    }
</style>