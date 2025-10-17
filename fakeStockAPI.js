export function updateClock() {
  const now = new Date()
  return now.toLocaleTimeString()
}

 export function getStockData() {
  let randPrice = Math.random() * 3
  return {
    name: 'QtechAI',
    sym: 'QTA',
    price: randPrice.toFixed(2),
    time: updateClock()
  }
}

export const stockData = getStockData()


