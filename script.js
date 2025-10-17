import { updateClock, getStockData, stockData } from "./fakeStockAPI.js"

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById('name')
  const stockDisplaySymbol = document.getElementById('symbol')
  const stockDisplayPrice = document.getElementById('price')
  const stockDisplayPriceIcon = document.getElementById('price-icon')
  const stockDisplayTime = document.getElementById('time')

  const { name, sym, price, time } = stockData

  stockDisplayName.innerText = `Name: ${name}`
  stockDisplaySymbol.innerText = `Symbol: ${sym}`
  stockDisplayPrice.innerText = `Price: ${price}`
  stockDisplayTime.innerText = `Time: ${time}`
  
}


setInterval(renderStockTicker, 1500, stockData)



