export default {
  pipe: (...functions) => pipedFunction => functions.reduce((arg, fun) => fun(arg), pipedFunction)
}
