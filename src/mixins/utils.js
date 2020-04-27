// The camelize function will takes a string and return string in camalCase.
// Example: Camplize("John Smith") returns johnSmith
const camelize = itemKeyName => {
  return itemKeyName
    .split(' ') // seperate string to array by spliting at spaces
    .map((element, index) => {
      // put first word to all lower case and capitalize all subsequent words
      if (index !== 0) {
        return element.charAt(0).toUpperCase() + element.slice(1)
      }
      return element.charAt(0).toLowerCase() + element.slice(1)
    })
    .join('')
}

// This function will check if a object has keys represented by a array of strings
// Example: let x = {cat: 1, dog: 2, pig: 1}
//          let y = ['cat', 'dog']
//          validateObject(x,y) returns true
const validateObject = (inputObject, neededKeys) => {
  const falseArr = new Array(neededKeys.length).fill(false)
  const mapPairs = neededKeys.map((ele, index) => [ele, falseArr[index]])
  const keyMap = new Map(mapPairs)

  for (const prop in inputObject) {
    if (keyMap.has(prop) && inputObject[prop]) keyMap.set(prop, true)
  }

  const allFound = [...keyMap.values()].every(element => element === true)
  return allFound
}

// This function will return a new array of objects that have been filtered based on a desired key:value pair
const filterOnKeys = (filterFieldName, desiredValues, arrToFilter) =>
  arrToFilter.filter(ele => desiredValues.includes(ele[filterFieldName]))

export { camelize, validateObject, filterOnKeys }
