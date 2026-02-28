/* 1. Following is example of callback (callback is also two types synchronous and asynchronous.), Its synchronous callback */

const { click } = require("wd/lib/commands");

function greet(msg, name){
    console.log(`${msg} ${name}`)
}

function fun(greetFun){
    const name = "RSingh";
    const msg = "Good Morning";
    greetFun(msg,name);
}

fun(greet);



/* 2. Asynchronous callback 
--> kind of callback that is often used to continue or resume code execution after a asynchronous operation has completed.
*/

// Example 1

function greet2(msg,name){
    console.log(msg+" "+name);
}

setTimeout(greet,1000,'Welcome','Rakesh'); // Here greet2 is callback function, setTimeout is higherorder function, greet gets executed after 1 sec not immediately


//Example 2

function asyncCallbackFun(){
    doc.getElementById("#name").innerHtml= 'RSingh';
}

doc.getElementById("callBtn").addEventListener(click, asyncCallbackFun); // asyncCallbackfun get called when we click on button not immediately.
