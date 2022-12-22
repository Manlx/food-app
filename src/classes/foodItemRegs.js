export default class foodItemRegs{
    count = 0;
    foodItem = null;
    constructor( foodItem, Count)
    {
        this.foodItem = foodItem;
        this.count = Count;
    }
    equals(foodItem){
        return (this.foodItem.ProdName == foodItem.ProdName) && (this.foodItem.ProdPrice == foodItem.ProdPrice)
    }
    itemCost(){
        return this.count * this.foodItem.ProdPrice;
    }
    getFoodName(){
        return this.foodItem.ProdName
    }
    getFoodCost(){
        return this.foodItem.ProdPrice
    }
    itemCostServiceFee(serviceFee)
    {
        return this.itemCost()*(100+serviceFee)/100;
    }
    getFoodID(){
        return this.foodItem.ProdID;
    }
}