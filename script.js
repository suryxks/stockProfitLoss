var purchasePriceInput = document.querySelector("#purchase-price");
var stockQuantityInput = document.querySelector("#stock-quantity");
var currentPriceInput = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-btn");
var outputEl = document.querySelector("#message");

function lossCalculator(loss, diff, cost) {
  var lossPercentage = (loss / cost) * 100;
  outputEl.style.color = "red";
  outputEl.innerHTML = `Sorry for your loss you have lost ${lossPercentage.toFixed(2)}% which is ${loss}`
}

function profitCalculator(profit, diff, cost) {
  var profitPercentage = (profit / cost) * 100;

  outputEl.innerHTML = `congratulations you have gained a profit of ${profitPercentage.toFixed(2)}% which is ${profit}`
}

function clickHandler() {
  if (purchasePriceInput.value === "" || stockQuantityInput.value === "" || currentPriceInput.value === "") {
    alert("Please fill all the required fields");
  }
  var purchasePrice = Number(purchasePriceInput.value);
  var stockQuantity = Number(stockQuantityInput.value);
  var currentPrice = Number(currentPriceInput.value);
  if (purchasePrice < 0 || stockQuantity < 0 || currentPrice < 0) {
    outputEl.innerHTML = "please Enter positive values"
  } else {
    if (purchasePrice > currentPrice) {
      var priceDiff = purchasePrice - currentPrice;
      var totalCostOfBuying = purchasePrice * stockQuantity;
      var loss = purchasePrice * stockQuantity - currentPrice * stockQuantity;
      lossCalculator(loss.toFixed(2), priceDiff.toFixed(2), totalCostOfBuying.toFixed(2));
    } else if (purchasePrice === currentPrice) {
      outputEl.innerHTML = "You have neither gained nor lost anything check again after few days";
    } else {
      var priceDiff = currentPrice - purchasePrice;
      var totalCostOfBuying = purchasePrice * stockQuantity;
      var profit = currentPrice * stockQuantity - purchasePrice * stockQuantity;

      profitCalculator(profit.toFixed(2), priceDiff.toFixed(2), totalCostOfBuying.toFixed(2));
    }

  }

}
checkButton.addEventListener("click", clickHandler);