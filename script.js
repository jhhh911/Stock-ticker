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
}

render();

setInterval(render, 1500);
