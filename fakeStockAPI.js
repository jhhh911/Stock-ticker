export function updateClock() {
  const now = new Date()
  return now.toLocaleTimeString()
}

let randPrice = Math.random() * 3
let currTime = updateClock()

export function getStockData() {
  
  return {
    name: 'QtechAI',
    sym: 'QTA',
    price: randPrice.toFixed(2),
    time: currTime
  }
}

export const stockData = getStockData()


