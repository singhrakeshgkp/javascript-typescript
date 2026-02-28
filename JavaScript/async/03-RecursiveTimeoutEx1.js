
/* 1. setTimeout recursive: -
-> Duration gauranteed between executions. in other word interval will be same
*/
setTimeout(function msg(){
    console.log("Recursive way setTimeout :running msg");
    setTimeout(msg,100);
},100);


/* 2. setInterval : - 
-> The duration interval includes the time taken to execute the code we are trying to run.
-> The code takes 30ms to run, the interval is 45ms
-> The code takes 70ms to run, the interval is 70ms
*/

