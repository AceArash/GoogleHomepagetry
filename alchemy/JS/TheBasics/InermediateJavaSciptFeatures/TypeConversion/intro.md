**Type Conversion**
Type conversion describes when a value changes its type. For instance, when a string turns into a number or vice-versa.

There are some explicit ways to change a value's type. These are obvious, purposeful methods intended to change the type.

// explicit conversion
const a = (1).toString();
console.log(a); // 1
console.log(typeof a); // string
There are also plenty of implicit ways to change a value's type. Since JavaScript is a loose typing language, it does it's best to assume the behavior that the programmer might expect.

// implicit conversion
const b = "3" + "4";
console.log(b); // 34
console.log(typeof b); // number
We'll dive into these examples and many more with some code exercises! 

