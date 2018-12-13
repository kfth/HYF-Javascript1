//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
//8.1 First declare at least four variables and assign them different data types.
let myVar1 = 19, myVar2 = "19", myVar3 = {name:"class 19"}, myVar4 = ["Ahmad","Ahmet","Alusine","Ammar","Ayham","Bassam","Fatih","mMohammad","Soolaf","Utku","ufuk","Yaseir"];

//8.2 For each variable write a console.log statement that logs the value

console.log("The value of myVar1 is: " + myVar1);
console.log("The value of myVar2 is: " + myVar2);
console.log("The value of myVar3 is: " + myVar3.name);
console.log("The value of myVar4 is: " + myVar4);

/*let foo = 3;
console.log("The value of my variable foo is: " + foo);
(Curious to know what a foo is? Check this article on Wikipedia.)*/

//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("The type of myVar1 should be: number"); 
console.log("The type of myVar2 should be: string");
console.log("The type of myVar3 should be: object");
console.log("The type of myVar4 should be: array or indeed object :)");

//8.4 Now use typeof to log the actual type of your variables.
console.log("The type of myVar1 is: " + typeof myVar1); 
console.log("The type of myVar2 is: " + typeof myVar2); 
console.log("The type of myVar3 is: " + typeof myVar3); 
console.log("The type of myVar4 is: " + typeof myVar4); 

//8.5 Now compare the types of your different variables with one another.
if ( typeof(myVar1) === typeof(myVar2) ) {
    console.log("variables myVar1 and myVar2 have the same type: " + typeof myVar1);
} else {
    console.log("variables myVar1 and myVar2 have DIFFERENT types(respectively):" + typeof myVar1 + " - " + typeof myVar2);
}

//8.6 Make sure to also show a message when the variables you are comparing are not the same type.
if ( typeof(myVar3) === typeof(myVar4) ) {
    console.log("variables myVar3 and myVar4 have the same type: " + typeof myVar3);
} else {
    console.log("variables myVar3 and myVar4 have DIFFERENT types(respectively):" + typeof myVar3 + " - " + typeof myVar4);
}
