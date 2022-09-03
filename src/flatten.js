const flatten = (arr) => {
  if (!arr.length) return arr;

  return arr.reduce((flatArr, elem) => {
    if (Array.isArray(elem)) {
      return [...flatArr, ...flatten(elem)]
    }
    else return [...flatArr, elem]
  }, [])
}

console.log(flatten([[[[]]]]))

module.exports = flatten

