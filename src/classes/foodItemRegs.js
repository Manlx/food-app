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
}