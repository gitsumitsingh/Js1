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


