export default class FoodItem{
    ProdName = ""
    ProdPrice = 0
    static IDGen = 0;
    ProdID = -1;
    PredefItem = false;
    constructor(ProdName, ProdPrice, PredefItem = true,ID){
        this.ProdName = ProdName;
        this.ProdPrice = ProdPrice;
        if (ID == null)
            this.ProdID = FoodItem.IDGen++;
        else
            this.ProdID = ID;
        this.PredefItem = PredefItem;
    }
}