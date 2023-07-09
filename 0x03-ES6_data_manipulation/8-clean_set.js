export default function cleanSet(set, startString) {
  const selected = [];
  if (!(startString)) {
    return '';
  }
  if (startString.length === 0) {
    return selected.join('');
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const short = element.substring(startString.length);
      if (short.endsWith('-')) {
        selected.push(short.slice(0, -1))
      } else {
        selected.push(short);
      }
    }
  });
  return selected.join('-');
}
