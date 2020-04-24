function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function calculateHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}
export { getRandomInt, calculateHypotenuse }
