let algos = require("../sumAllInArray.js");

//SUM ALL IN ARRAY
//add all the numbers in the given array, strings included
//if an element inside the array is a string that contains a number, include it in the addition
//if an element inside the array is a string that is not a number, do not include it in the addition
// test
test("sum all the numbers in the array", () => {
  expect(algos.sumAllInArray([65, 34, 8, 9, 3])).toBe(119)
  expect(algos.sumAllInArray(["-1", 4, "-32", 8, "94"])).toBe(73)
  expect(algos.sumAllInArray(["-1", "a", 4, "-32", 8, "94"])).toBe(73)
})

  