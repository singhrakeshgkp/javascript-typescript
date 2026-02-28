/* 1. Functin with zero parameter */
function greet1(){
   console.log("setTimeout: - Execute function that has zero parameter")
}

setTimeout(greet1,2000);


function greet2(msg){
   console.log(msg)
}
/* 2. Function with one parameter */

/*  by including () parentheses after greet, you are telling java script executet this function right now and give result to timer.
since greet function does't return anything setTimeout receives undefined and has nothing to run after 2 sec.  */

/* setTimeout(greet('welcome to this session , timeout'),2000); */

/* Solution A :-  Wrap function to fix prolem in step 1 */

setTimeout(()=>{greet2('setTimeout:- Executing function that has 1 argument: Solution A : which is Wraping function')},2000);

/* Solution B :- Passing argument via setTimeout */

setTimeout(greet2,2000, 'setTimeout:- Executing function that has 1 argument: Solution B : which is passing argment via setTimeout')



/* 3. Clear timeout :- Following line will print nothing on console as we have cleared timeout */
 function testClearTimeout(){
   console.log('clearTimeout Example')
}
const timeoutRef = setTimeout(testClearTimeout, 2000);
clearTimeout(timeoutRef)
