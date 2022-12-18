import FIRList from "./foodItemRegsList.js"
export default class customer{
    name = ""
    foodList = null 
    constructor(name)
    {
        this.name = name;
        this.foodList = new FIRList();
    }
}