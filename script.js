const time = document.getElementById('time');

function updateClock() {
  const now = new Date()
  let aMPM = now >= 12 ? 'PM' : 'AM'
  time.innerHTML = `Time: ${now.toLocaleTimeString()}${aMPM}`
}

updateClock()

setInterval(updateClock, 1000)