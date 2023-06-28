export default function divideFunction(numerator, denomination) {
  if (denomination === 0) {
    throw Error('cannot divide by 0');
  } else {
    return numerator / denomination;
  }
}
