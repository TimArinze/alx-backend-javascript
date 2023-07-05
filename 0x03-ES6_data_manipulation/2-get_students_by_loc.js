export default function getStudentsByLocation(theArray, theString) {
  const filtered = theArray.filter((value) => value.location === theString);
  return filtered;
}
