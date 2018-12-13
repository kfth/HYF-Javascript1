//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
//9.1 Add at least 3 console.log statements in which you show that you understand what % does.

x = 7;
console.log("Value of x is: " + x);
console.log("% refers to Modulo or remainder operator that calculates the remaining value after division")
console.log("In this example x % 3 modulo gives remainder value of x after divided by 3")
console.log("%calculates 7 divided by 3 equals 2 with a remainder of 1 thus the result is " +  (x - (Math.floor(x/3) * 3)) );

x = x % 3;
console.log("x=7 has the value of remainder after divided by 3 is: " + x);

