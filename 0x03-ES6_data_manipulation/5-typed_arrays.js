export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  try {
    int8view[position] = value;
    const view = new DataView(buffer);
    return view;
  } catch (error) {
    console.error('Position outside range', error);
    throw error;
  }
}
