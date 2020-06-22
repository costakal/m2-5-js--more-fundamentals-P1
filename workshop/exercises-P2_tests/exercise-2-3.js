// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  if (
    input.length !== 2 ||
    typeof input[0] !== "number" ||
    typeof input[1] !== "number"
  ) {
    return undefined;
  }
  let sum = input[0] + input[1];
  return sum;
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([5, 7]), 12);
expect(sumDigits([4, 10]), 14);
expect(sumDigits([21, 4]), 25);
expect(sumDigits([4, -2]), 2);
expect(sumDigits([-1, -1]), -2);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
