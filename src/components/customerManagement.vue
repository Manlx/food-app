<template>
    <div>
        <div class="itemsHolder" :class="{minimized:!this.collapsed}" @click="this.collapsed = ! this.collapsed">
            Expand Users
        </div>
        <div class="itemsHolder" :class="{minimized:this.collapsed}">
            <div class="FillMax" :class="{minimized:this.addUser}">
                <customer-display v-for="item,index in UsersData" :key="index" :userData="item" :Localization="this.Localization" @removeUser="this.removeUser" :serviceFee="this.SerivceFee" :products="this.products" @AddProduct="this.addProd"/>
                <div class="OptionsHolder">
                    <div class="minimizeBox" @click="this.closeClick" >Add</div>
                    <div class="minimizeBox" @click="this.collapsed = !this.collapsed">Collapse</div>
                </div>
                
            </div>
            <div class="userInput" :class="{minimized:!this.addUser}">
                <div class="userInputRow">
                    <label for="CustName">Name:</label>
                    <input type="text" id="CustName" v-model="this.userName">
                </div>
                <div class="buttonHolder">
                    <div class="minimizeBox" @click="this.addUserClick">Add</div>
                    <div class="minimizeBox" @click="this.closeClick">Close</div>
                </div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
import customerDisplay from './customerDisplay.vue'
import customer from "./../classes/customerClass.js"

export default {
    components: { customerDisplay },
    data:function(){
        return {
            collapsed:true,
            addUser:false,
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
            this.$emit("addUserClick",User)
        },
        closeClick:function(){
            this.addUser = !this.addUser;
        },
        addProd:function(user,prod)
        {
            this.$emit("addProd",user,prod)
        }
    },
    props:["UsersData","Localization","SerivceFee","products"],
    // emits:["removeSelectedUser"]
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

    .minimized{
        display: none;
    }

    .userInputRow{
        display: flex;
        justify-content: space-between;
    }
</style>