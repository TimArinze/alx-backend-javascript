export default function setFromArray(Array) {
  const set = new Set();
  Array.forEach((value) => set.add(value));
  return set;
}
