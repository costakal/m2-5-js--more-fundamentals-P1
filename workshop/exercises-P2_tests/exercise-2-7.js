// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let stringArr = arr[0];
  let numberArr = arr[1];

  let combo = "";

  if (typeof stringArr !== "string" || typeof numberArr !== "number") {
    return undefined;
  }

  if (numberArr <= 0) {
    return "";
  }

  for (let i = 0; i < numberArr; i++) {
    combo += stringArr;
  }
  return combo;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["foo", 3]), "foofoofoo");
expect(repeat(["Costa ", 5]), "Costa Costa Costa Costa Costa ");
expect(repeat(["Hello", -1]), "");
expect(repeat([30, 1]), undefined);
expect(repeat(["bookFace", 2]), "bookFacebookFace");
expect(repeat(["hello", "hello"]), undefined);
expect(repeat([40, "hello"]), undefined);

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
