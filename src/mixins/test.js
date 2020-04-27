const data = {
  x: {
    name: 'harry',
    sex: 'male'
  }
}
const alter = (x, key, val) => {
  x[key] = val
}
console.log(data)

alter(data.x, 'name', 'Milton')

console.log(data)
