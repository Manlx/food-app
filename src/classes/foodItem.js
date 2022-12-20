export default class FoodItem{
    ProdName = ""
    ProdPrice = 0
    static IDGen = 0;
    ProdID = -1;
    constructor(ProdName, ProdPrice){
        this.ProdName = ProdName;
        this.ProdPrice = ProdPrice;
        this.ProdID = FoodItem.IDGen++;
    }
}