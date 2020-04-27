const makePayload = ({
  section = '',
  camelizedNameKey = '',
  value = ''
} = {}) => ({
  section,
  camelizedNameKey,
  value
})

const makeStateObject = (payload, objectToBuild, conditionalFunc = (x) => x.value) => {
  const nameKey = payload.camelizedNameKey
  const value = conditionalFunc(payload)

  objectToBuild[nameKey] = value
}
export { makePayload, makeStateObject }
