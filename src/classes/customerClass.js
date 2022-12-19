import FIRList from "./foodItemRegsList.js"
export default class customer{
    name = ""
    foodList = null
    static IDGlobe =0;
    ID = -1;
    constructor(name)
    {
        this.name = name;
        this.foodList = new FIRList();
        this.ID = customer.IDGlobe++;
    }
    calcCost(){
        return this.foodList.calcCost();
    }
    equals(Custom){
        return this.name == Custom.name && this.ID == Custom.ID;
    }
    addProduct(Prod){
        this.foodList.AddFI(Prod);
    }
    reduceProd(Prod){
        this.foodList.Reduce(Prod);
    }
}