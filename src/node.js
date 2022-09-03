const { MATH_OPS, MATH_OPS_FUNCS } = require("./helpers")

const Node = (operator, value, left, right) => {
  const result = function () {
    if (!MATH_OPS[operator]) return value;

    return MATH_OPS_FUNCS[operator]?.(left.result(), right.result());
  };

  const toString = function () {
    if (!MATH_OPS[operator]) return value.toString();

    return `(${left.toString()} ${operator} ${right.toString()})`;
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString
  };
};

module.exports = {
  Node
}
