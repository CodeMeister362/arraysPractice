var names = ["scott", "nate", "sarh", "kyle"];
var numbers = [4, 5 ,6 ,8];
var booleans = [true, false, true, false];


// Push: The push method adds the elements in parenthes
// to the end of the array. 
names.push("Josh Allen");
console.log(names);

// Shift: The shift method removes the first element of the array.
numbers.shift();
console.log(numbers);

// Slice: The slice method returns a portion of the array signified 
// by the index numbers in parentheses with the last index number not included in the return.
console.log(booleans.slice(0, 2));