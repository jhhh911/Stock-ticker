import { stockData, updateClock, getStockData } from "./fakeStockAPI.js"

function render(stockData) {
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

  setInterval(render, 1000, stockData)
}

render(stockData)





