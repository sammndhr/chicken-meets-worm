function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
// Didn't use
function calculateHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

function inRange(num, min, max) {
  return num >= min && num <= max
}
// Didn't use
function easeLinear(t, b, c, d) {
  return (c * t) / d + b
}
export { getRandomInt, calculateHypotenuse, inRange, easeLinear }
