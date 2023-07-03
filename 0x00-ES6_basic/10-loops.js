export default function appendToEacArrayValue(array, appendString) {
  const theArray = [];
  array.forEach((element) => theArray.push(appendString + element));
  return theArray;
}
