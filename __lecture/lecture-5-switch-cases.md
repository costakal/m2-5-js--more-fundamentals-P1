# 2.5.5 - JS More Fundamentals - Switch Cases

---

## The [Switch statement](https://love2dev.com/blog/javascript-switch-statement/)

is used as an alternate to multiple if / else statements.

---

Switch statements can be thought of as _syntactic sugar_. There are no significant differences.

---

### Characteristics

- The switch expression is evaluated once.
- The value of the expression is compared with the value of each case in order.
- If there is a match, the associated block of code is executed.
- A default case can be defined when the expression does not match a case.

---

### Example

```js
switch (time) {
  case 6:
    console.log("Wake up!");
    alarm();
    break;
  case 22:
    console.log("off to bed");
    turnOffComputer();
    break;
  default:
    console.log("Keep doing what you're doing");
    noChange();
    break;
}
```

---

### `break` vs `return`

- `break` will _break_ out of the switch case.
- Without a `break`, the following cases will also be evaluated.
- `return` will stop the rest of the function from being evaluated.

---

# Exercises

Convert the following if/else to use `switch`

---

```js
// Exercise 1
function getFavouriteFoodEmoji(food) {
  if (food === 'hamburger') {
    return '🍔';
  } else if (food === 'sushi') {
    return '🍣';
  } else if (food === 'lobster') {
    return '🦞';
  } else if (food === 'pizza') {
    return '🍕';
  }
}

function getFavouriteFoodEmoji(food) {
switch(food) {
  case 'hamburger':
  return = "🍔";
  case "sushi":
  return = '🍣';
  case "lobster":
  return '🦞';
  case "pizza":
  return '🍕';
  default
  return
  }

}
}


```

---

```js
// Exercise 2
function calculator(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  } else {
    console.error("Unrecognized operation: ", operation);
    return null;
  }
}
```

---

```js
// Exercise 3
function greetUser(hourOfDay) {
  if (hourOfDay <= 11) {
    console.log("Good morning");
  } else if (hourOfDay < 6) {
    console.log("Good afternoon");
  } else {
    console.log("Good evening");
  }
}
```

---
