var purchasePriceInput=document.querySelector("#purchase-price");
var stockQuantityInput=document.querySelector("#stock-quantity");
var currentPriceInput=document.querySelector("#current-price");
var checkButton=document.querySelector("#check-btn");
var outputEl=document.querySelector("#message");

function lossCalculator(loss,diff,cost){
  var lossPercentage=(loss/cost)*100;

  outputEl.innerHTML=`Sorry for your loss you have lost ${lossPercentage}% which is ${loss}`
}
function profitCalculator(profit,diff,cost){
    var profitPercentage=(profit/cost)*100;
  
    outputEl.innerHTML=`congratulations you have gained a profit of ${profitPercentage}% which is ${profit}`
  }
function clickHandler(){
    var purchasePrice=Number(purchasePriceInput.value);
    var stockQuantity=Number(stockQuantityInput.value);
    var currentPrice=Number(currentPriceInput.value);
  if(purchasePrice>currentPrice){
      var priceDiff=purchasePrice-currentPrice;
      var totalCostOfBuying=purchasePrice*stockQuantity;
      var loss=purchasePrice*stockQuantity-currentPrice*stockQuantity;
      lossCalculator(loss,priceDiff,totalCostOfBuying);
  }else if(purchasePrice===currentPrice){
    outputEl.innerHTML="You have neither gained nor lost anything check again after few days";
}else{
    var priceDiff=currentPrice-purchasePrice;
    var totalCostOfBuying=purchasePrice*stockQuantity;
    var profit=currentPrice*stockQuantity-purchasePrice*stockQuantity;
    console.log(profit,priceDiff,totalCostOfBuying);
    profitCalculator(profit,priceDiff,totalCostOfBuying);
  }
  
    

}
checkButton.addEventListener("click",clickHandler);