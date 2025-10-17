import { getStockData } from "./fakeStockAPI.js";

let prevPrice = null;

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

  const priceDirection =
    price > prevPrice
      ? (stockDisplayPriceIcon.innerHTML = "&#8593;")
      : price === prevPrice
      ? (stockDisplayPriceIcon.innerHTML = "&#8594;")
      : (stockDisplayPriceIcon.innerHTML = "&#8595;");

  prevPrice = price;
}

render();

setInterval(render, 1500);
