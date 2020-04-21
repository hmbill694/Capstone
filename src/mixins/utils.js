
// The camelize function will takes a string and return string in camalCase.
// Example: Camplize("John Smith") returns johnSmith
const camelize = (itemKeyName) => {
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

export {
  camelize
}
