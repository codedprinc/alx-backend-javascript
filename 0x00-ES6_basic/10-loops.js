export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let x of array) {
    newArray.push(appendString + x);
  }

  return newArray;
}