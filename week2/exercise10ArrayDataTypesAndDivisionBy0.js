//10. Write a program to answer the following questions:
//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
let myArray=[5,"a string",true,{name:"Fatih"}]; 

//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
let myNumber1, myNumber2;
myNumber1 = 6/0;
myNumber2 = 10/0;
console.log("Result of 6/0 is: " + myNumber1);
console.log("Result of 10/0 is: " + myNumber2);

if (myNumber1 === myNumber2){
    console.log(myNumber1 +" is equal to " + myNumber2);
} else {
    console.log(myNumber1 +" is NOT equal to " + myNumber2);
}

// 10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
console.log("Values of myArray: " + myArray);
console.log("type of myArray itself: " + typeof myArray);
console.log("type of first value of myArray is: " + typeof myArray[0]);
console.log("type of second value of myArray is: " + typeof myArray[1]);
console.log("type of third value of myArray is: " + typeof myArray[2]);
console.log("type of fourth value of myArray is: " + typeof myArray[3]);
