// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  let newArr = str.charAt(index);
  switch (str) {
    case "":
      return undefined;
    default:
      return newArr;
  }
}

// // Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("", 3), undefined);
expect(getLetterAtIndex("10", 0), "1");
expect(getLetterAtIndex("Hi there", 0), "H");
expect(getLetterAtIndex("Peace", 2), "a");
expect(getLetterAtIndex("Love", 2), "v");
expect(getLetterAtIndex("Moomba", 1), "o");

// /**
//  * -------------------------------------------------------------------
//  * ⚠️ No changes necessary below. ⚠️
//  * -------------------------------------------------------------------
//  */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
