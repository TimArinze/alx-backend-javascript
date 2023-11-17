//A function that rounds two numbers a and b before adding them
const calculateNumber = (a, b) => {
  // Math.round turns floats into whole numbers
  return Math.round(a) + Math.round(b)
}

module.exports = calculateNumber;
