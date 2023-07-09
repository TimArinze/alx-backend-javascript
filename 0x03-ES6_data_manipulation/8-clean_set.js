export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const newSet = new Set();
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      newSet.add(value.slice(startString.length));
    }
  });
  return Array.from(newSet).join('-');
}
