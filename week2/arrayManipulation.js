//2. Arrays!

//Consider the following array:
//let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(`Favorite animals are:${favoriteAnimals}`);

//2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.

favoriteAnimals.push("turtle");

//2.2 Log your new array!
console.log(favoriteAnimals);

//2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1,0,"meerkat");

//2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log('New value of the array favorite animals should be: [ "blowfish", "meerkat", "capricorn", "giraffe", "turtle" ]');

//2.5 Log your new array!
console.log(favoriteAnimals);

//2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log(`The array has a length of: ${favoriteAnimals.length} and array has ${favoriteAnimals.length+1} elements.`)

//2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3,1);

//2.8 Again log your new array.
console.log(favoriteAnimals);

//2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
//2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).

console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`);

