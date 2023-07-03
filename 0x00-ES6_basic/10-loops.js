export default function appendToEacArrayValue(array, appendString) {
  const theArray = [];
  for (const element of array) {
    theArray.push(appendString + element);
  }
  return theArray;
}
