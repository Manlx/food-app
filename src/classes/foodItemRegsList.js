import FIR from "./foodItemRegs.js"
export default class foodItemRegsList{
    FIRArr = []
    constructor(){}
    Delete(FoodItem) {
        let index = this.Contains(FoodItem);
        if (index >= 0)
        {
            this.FIRArr.splice(index,1)
            return true;
        }
        return false;
    }

    calcCost(){
        let Total = 0;
        this.FIRArr.forEach(element => {
            Total += element.itemCost();
        });
        return Total;
    }

    /**
     * Returns a >= 0 int if found else -1.
     */
    Contains(foodItem){
        for(let i = 0; i < this.FIRArr.length;i++) 
            if (this.FIRArr[i].equals(foodItem))
                return i;
        return -1;
    }

    /**
     * Reduced the spesified foodItem by a certain amount
     */
    Reduce(foodItem, count = 1){
        let Index=  this.Contains(foodItem)
        if (Index >= 0)
        {
            this.FIRArr[Index].count -= count;
            if (this.FIRArr[Index].count <= 0)
                this.Delete(foodItem)
        }
    }

    /**
     * Increase or add a new food Item. 
     */
    AddFI(foodItem,count = 1){
        if (count <= 0)
            return;

        let Index = this.Contains(foodItem)
        if (Index >= 0)
        {
            this.FIRArr[Index].count += count;
            return;
        } 
        
        this.FIRArr.push(new FIR(foodItem,count));
    }

    /**
     * Sorts Alphabetically 
     */
    sortAlpha(){
        this.FIRArr.sort(({foodItem:{ProdName:a}},{foodItem:{ProdName:b}})=>{
            a = a.toUpperCase();
            b = b.toUpperCase();
            return (a < b) ? - 1 :( a > b) ? 1 : 0;
        });
    }

    sortCount(){
        this.FIRArr.sort(({count:a},{count:b})=>{
            return b - a; 
        });
    }

    sortCost(){
        this.FIRArr.sort((a,b)=>{
            return b.itemCost() - a.itemCost();
        })
    }
}