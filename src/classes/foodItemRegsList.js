import FIR from "./foodItemRegs.js"
export default class foodItemRegsList{
    FIRArr = []
    constructor(){}
    Delete(FoodItem) {
        let index = this.Contains(FoodItem);
        console.log(index)
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

    Reduce(foodItem, count = 1){
        let Index=  this.Contains(foodItem)
        if (Index >= 0)
        {
            this.FIRArr[Index].count -= count;
            if (this.FIRArr[Index].count <= 0)
                this.Delete(foodItem)
        }
    }

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
}