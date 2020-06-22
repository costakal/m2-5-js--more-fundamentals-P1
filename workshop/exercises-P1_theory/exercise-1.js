// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));

// It starts on the inner most function being a "decrement". Taking x (which = 3) - 1 and returning 2.
// Next it takes the new value of x which = 2 and runs the square function (x * x OR 2 * 2) and returns 4.
// Next it runs the decrement function on the new value of 4 and subtracts 1, which return 3.
// Then it runs the outer most function which is square and multiplies the new value of 3 with itself to give us the answer which is 9

// 1-2
decrement(decrement(square(square(3))));

// It takes the value of three and mulitplies it by itself which gives 9/.
// It then takes the new value of 9 and multiples it by itself which is 81.
//It then takes the next value and uses the decrement function to subtract 1 which gives 80,
// It then does the decrement function one more time and gives the final answer which is 79

// 1-3
duplicateString(reverseString("hello"));

// First it runs the reverseString Function and provides the string "hello" backwards as "olleh".
// Next it runs the duplicateString function and concatanates the new value with the same value giving us "olleholleh"

// 1-4
reverseString(duplicateString(duplicateString("foo")));

// first it duplicates the string "foo" and gives us "foofoo"
// then it duplicates the new value and gives us "foofoofoofoo", and then finally it reverses that value and gives us oofoofoofoof
