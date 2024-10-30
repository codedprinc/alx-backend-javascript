export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position >= length) {
    throw Error('Position outside range');
  }

  const dtview = new DataView(buffer);
  dtview.setInt8(position, value);

  return dtview;
}
