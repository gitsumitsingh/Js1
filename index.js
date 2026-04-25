console.log("hello world")
let a = [1, 6, 8, 5, 5, 6]
for (var i = 0; i < a.length; i++) {
  // Tab to edit 
  console.log(a[i])
}


function test1(a,b) {}
console.log("test1 length",test1.length);

function test2(a,b=10,c,...rest) {}
console.log("test2 length", test2.length);

/*
in Javascript,function length will return the function length before the default value, means default value ke pahle tak fn length return hoga
https://www.instagram.com/reel/DVv8ziUjBLH/?igsh=MWRxOGg3Mzk5YWZ2dQ==

how to stop infinite loop
for (;;) {
  console.log("infinity loop")
}
*/

function count() {
    console.log("inside count fn "+this.length);
}

let arr = [count, 1, 2, 3];

arr[0]('hi');

/*
this binding (implicit binding) in JavaScript
this refers to the object before the dot → arr
this refers to the array (arr), so this.length is 4.

https://www.instagram.com/reel/DWZJutFDHCV/?igsh=eXdrMDc1b3EweTc5
*/
let narr = [1, [2, [3, 4]]];

//using built-in method
let res = narr.flat(Infinity);

function flatArray(arr) {
  let res = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      res.push(...flatArray(i));
    } else {
      res.push(i);
    }
  }

  return res;
}

// Example
console.log("nested arrays recursive method ",flatArray(narr)); // [1, 2, 3, 4]



console.log("nested arrays buitin method",res);

/*
Loop through each element
If element is an array → call function again (recursion)
If not → push directly
... spreads the returned flattened values into res
*/

/*
https://www.instagram.com/reel/DT2txrJErAf/?igsh=dWc5OTQycTZpNXVk

*/

let a2=5,b2=10;
console.log("before swap single line ", a2,b2);
a2= (a2+b2)-(b2=a2);
console.log("aftswap single line ", a2,b2);




let arrnum1 = [1, 2, 3, 3, 4, 3, 3, 1, 1, 2];
// sort in asending order of frequency
// output [ 4, 2, 1, 3 ]

// Step 1: Count frequency
let obj = {};

for (let num of arrnum1) {
  obj[num] = obj[num] + 1 || 1;
}

// Step 2: Convert object to array of [key, value]
let entries = Object.entries(obj);

// Step 3: Sort by frequency (ascending)
let sorted = entries.sort((a, b) => {
  return a[1] - b[1];
});

// Step 4: Extract only numbers (keys)
let result = sorted.map(ele => +ele[0]);

console.log(result);


/*
sort arrnum1 in asending order
https://www.instagram.com/reel/DVYx-nfDN4y/?igsh=ZWZkcWFsNWduZjRv
*/

myFunc();   // (1)

var myFunc = () => {
  console.log('one');
}

myFunc(); // (2)

function myFunc() {
  console.log('two');
}

myFunc();   // (3)

/*
js hoisting iv question
https://www.instagram.com/reel/DWRdduZDgmK/?igsh=MTB6ZTQ4dmd6bzl1eA==
*/