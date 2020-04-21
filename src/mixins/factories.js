const makePayload = ({
  section = '',
  camelizedKeyName = '',
  value = ''
} = {}) => ({
  section,
  camelizedKeyName,
  value
})

export { makePayload }
