export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const array = Array.from(set);
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].startsWith(startString)) {
      if (str) {
        str = `${str}-${array[i].replace(startString, '')}`;
      } else {
        str += array[i].replace(startString, '');
      }
    }
  }

  return str;
}
