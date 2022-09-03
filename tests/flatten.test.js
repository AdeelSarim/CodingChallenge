const flatten = require('../src/flatten');

describe("flatten", () => {
  it("it should not change the input", () => {
    let nestedArr = [1, 2, 3, [4, 5, [6]]];
    flatten(nestedArr);

    expect(nestedArr).toStrictEqual(nestedArr);
  });

  it("should return an empty array", () => {
    const emptyArr = [];

    expect(flatten(emptyArr)).toEqual(emptyArr);
  });

  it("should return an empty array for nested empty arrays", () => {
    const nestedEmptyArr = [[[[[]]]]];

    expect(flatten(nestedEmptyArr)).toEqual([]);
  });

  it("should return the same array if array is already flat", () => {
    const flatArr = [1, 2, 3];

    expect(flatten(flatArr)).toEqual(flatArr);
  });

  it("should return a flattened array", () => {
    const nestedArr = [1, [2, [3, [4, [5, [6]]]]]];
    const flattened = [1, 2, 3, 4, 5, 6];

    expect(flatten(nestedArr)).toEqual(flattened);
  });
})
