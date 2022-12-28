import foodItem from "./foodItem.js"
export default class foodListManager{
    FoodList = []
    foodIDCount = 0;
    constructor(){

    }
    /**
     * Adds a pre-existing foodItem
     * @param {} FoodItem 
     */
    AddFoodObj(FoodItem){
        this.FoodList.push(FoodItem)
    }

    /**
     * Creates and adds a food item.
     * @param {*} FoodName Name of the food
     * @param {*} FoodPrice Price of the food
     * @param {*} isPredef is this a predefinded FoodItem
     */
    AddFoodItem(FoodName,FoodPrice,isPredef = true){
        this.AddFoodObj(new foodItem(FoodName,FoodPrice,isPredef,this.foodIDCount++))
    }

    /**
     * Finds index of Food Item in FoodList
     * @param {*} FoodID 
     * @returns Int if positive is index else retuns negative if not found 
     */
    findIndex(FoodID){
        for (let i = 0; i < this.FoodList.length;i++)
            if (this.FoodList[i].ProdID == FoodID) 
                return i;
        return -1;
    }

    /**
     * Finds Food item Object
     * @param {*} FoodID 
     * @returns Object if found else returns null.
     */
    find(FoodID){
        let out = this.findIndex(FoodID)
        if (out >= 0)
            return this.FoodList[out];
        else
            return null;
    }

}
