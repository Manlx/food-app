<template>
    <div class="bigBod">
        <div class="gridHolder">
            <div class="total title">Total</div>
            <div class="raw title">Brutto</div>
            <div class="serviceTotal title">Service</div>
            <div class="complete title">Netto</div>
        </div>
        <div class="gridHolder">
            <div class="raw title">{{this.localization.Currency}} {{this.rawTotal}}</div>
            <div class="serviceTotal title">{{this.localization.Currency}} {{(this.rawTotal*(this.serviceFee)/100).toFixed(2)}}</div>
            <div class="complete title">{{this.localization.Currency}} {{(this.rawTotal*(this.serviceFee+100)/100).toFixed(2)}}</div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:["rawTotal","localization","serviceFee"]
}
</script>

<style scoped>
    .title{
        display: inline-flex;
        font-size: 0.9rem;
    }
    .raw{
        grid-column: 2;
    }
    .total{
        font-size: larger;
    }
    .gridHolder{
        display: grid;
        /* grid-template-columns: 3.5fr repeat(2,1fr); */
        grid-template-columns: 47.5% 17.5% 17.5% 17.5%;
        /* background-color: aquamarine; */
        /* padding: 0% 1%; */
    }
    .bigBod{
        padding: 1% 1%;
        width: 98%;
        border-end-end-radius: 1vw;
        border-bottom-left-radius: 1vw;
        background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
    }
</style>