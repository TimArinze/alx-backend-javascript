export default function getStudentIdsSum(theArray) {
  const reduced = theArray.reduce((accumulator, currentValue) => currentValue.id + accumulator, 0);
  return reduced;
}
