const numberObj = {
    x: 50,
  a: 1,
  b: 50,
  c: 12
}

function getMaxValueKey(obj) {
  return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

console.log(getMaxValueKey(numberObj))