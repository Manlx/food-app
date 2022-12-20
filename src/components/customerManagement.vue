<template>
    <collapse-box :dispTitle="`Expand Users`">
        <collapse-box :darken="'true'" :dispTitle="`View Users`" :noMargin="true">
            <customer-display v-for="item,index in UsersData" :key="index" :userData="item" :Localization="this.Localization" @removeUser="this.removeUser" :serviceFee="this.SerivceFee" :products="this.products" @AddProduct="this.addProd"/>
        </collapse-box>
        <collapse-box :dispTitle="'Add'" :darken="'true'" :noPadding="false" :marginSetting="'1% 0% 1% 0%'" ref="addUserBox">
            <div class="userInputRow">
                <label for="CustName">Name:</label>
                <input type="text" id="CustName" v-model="this.userName">
            </div>
            <button-group :btnTitles="[`Add`,`Cancel`]" :btnMethods="[this.addUserClick,this.cancelAddUser]" :marginSetting="'0% 0% 1% 0%'"/>
        </collapse-box>
    </collapse-box>
</template>

<script>
import customerDisplay from './customerDisplay.vue'
import customer from "./../classes/customerClass.js"
import CollapseBox from './collapseBox.vue'
import ButtonGroup from './buttonGroup.vue'

export default {
    components: { customerDisplay, CollapseBox, ButtonGroup },
    data:function(){
        return {
            userName:""
        }
    },
    mounted:function(){
    //   console.log(this.UsersData)  
    },
    methods:{
        removeUser:function(User){
            this.$emit("removeSelectedUser",User)
            // emits
        },
        addUserClick:function(){
            let User = new customer(this.userName);
            this.userName = "";
            this.addUser = ! this.addUser;
            this.$refs.addUserBox.toggle();
            this.$emit("addUserClick",User)
        },
        cancelAddUser:function(){
            this.userName = "";
            this.$refs.addUserBox.toggle();
        },
        addProd:function(user,prod)
        {
            this.$emit("addProd",user,prod)
        }
    },
    props:["UsersData","Localization","SerivceFee","products"],
}
</script>

<style scoped>
    input{
        background-color: #232323;
        width: 60%;
    }

    .userInput{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 2% 2%;
        width: 100%;
    }

    .FillMax{
        width: 100%;
        height: 100%;
    }

    .userInputRow{
        display: flex;
        justify-content: space-around;
        margin: 1% 0%;
        width: 100%;
    }

    .userInputRow input{
        border: none;
    }

    .buttonHolder{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>