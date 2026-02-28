
/* Case 1 ---> returning non promise value (here java script will wraps it in a resolved promise immediately) */
async function greet1(){
    return "Welcome";  // will return Promise with of type string with message welcome
};

console.log(greet1());  // will print   Promise { 'Welcome' }
// OR
greet1().then((value) => console.log(value));  // will print welcome text only


/* case 2 --> returning promise from async fun */
async function greet2(params) {
     return Promise.resolve("Hello");
}

console.log(greet2()); // will give output Promise { <pending> }
greet2().then((value) => console.log(value));  // will print hello
