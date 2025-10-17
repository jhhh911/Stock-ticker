import { getStockData } from "./fakeStockAPI.js";

function render() {
  const stockData = getStockData();
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  const { name, sym, price, time } = stockData;

  stockDisplayName.innerText = `Name: ${name}`;
  stockDisplaySymbol.innerText = `Symbol: ${sym}`;
  stockDisplayPrice.innerText = `Price: ${price}`;
  stockDisplayTime.innerText = `Time: ${time}`;
   if (price > 0.95) {
    stockDisplayPriceIcon.innerHTML = '&#8593;'
  } else if (price < 0.95) {
    stockDisplayPriceIcon.innerHTML = '&#8595;'
  } else {
    stockDisplayPriceIcon.innerHTML = '&#8594;'
  }
}

render();

setInterval(render, 1500);
