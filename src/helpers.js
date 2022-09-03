const MATH_OPS = {
  "+": "+",
  "-": "-",
  "x": "x",
  "÷": "÷",
}

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const MATH_OPS_FUNCS = {
  "+": add,
  "-": subtract,
  "x": multiply,
  "÷": divide,
}

module.exports = {
  MATH_OPS,
  MATH_OPS_FUNCS,
}
