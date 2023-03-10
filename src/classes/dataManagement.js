String.prototype.hashCode = function() {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export default class DataManager{
    latestStored = null

    constructor(){
    }

    getStoredData(){
        this.latestStored = document.cookie;
        
        return this.latestStored != null;
    }

    storedData(data){
        let JSONData = JSON.stringify(data)
        document.cookie = JSONData;
    }

    clearData(){
        document.cookie = `emptyCookie`;
    }

    checkForValidSave(){
        try {
            JSON.parse(document.cookie)
            return true;
        } catch (error) {
            return false;
        }
    }
}