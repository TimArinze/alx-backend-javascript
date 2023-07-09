export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') {
    return '';
  }
  const newSet = new Set();
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      newSet.add(element.slice(startString.length))
    }
  });
  return Array.from(newSet).join('-');
}
