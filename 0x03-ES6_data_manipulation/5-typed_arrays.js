export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  try {
    int8view[position] = value;
    const DataView = {
      byteLength: int8view.byteLength,
      byteOffset: int8view.byteOffset,
      buffer,
    };
    return DataView;
  } catch (error) {
    console.error('Position outside range', error);
    throw error;
  }
}
