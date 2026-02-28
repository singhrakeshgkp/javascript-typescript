# Table of contents
- [Asynchronous](#Asynchronous)
  - [Timeout and Intervals](#setTimeout-and-Intervals)
  - [Recursive Timeout vs Interval](#recursive-timeout-vs-interval)
- [Callback](#callback)
  - [Issue with callback](#issue-with-callback)
- [Promise](#Promise)
- [Async Await](#async-await)
 



# Asynchronous
- java script uses third party library to achieve async behavior 
## Timeout and Intervals
- **Note**:- TimeOut and Interval are not feature of java script, its implemented by browser. setTimeOut and setInterval is name given by java script.
- **setTimeout** -> executes a particular block of code after the specified time has elasped
  -  Syntax ```setTimeout(function, duration, param1, param2, ....)```
    - First parameter is a function to run, or a reference to a function defined elsewhere.
    - Second parameter is duration.
    - After second parameter we can pass zero or more values that represent any parameters you want to pass to pass function.
  - refer ```01-TimeoutEx1.js```
- **clearTimeout** -> To clear a timeout, you can use clearTimeout function. when callingClearTimeOut you have to pass in identifier returned by setTimeout
  - refer ```01-TimeoutEx1.js``` section point 3 in this file.
- **setInterval** -> Keeps the task running forever, it must be clear when appropriate.  refer ```02-SetIntervalEx1.js```

## Recursive Timeout vs Interval
- We can achieve same functionality(what we get from setInterval) with recursive timeout.
- refer ```03-RecursiveTimeout.js```

# Callback
- In java script functions are first class citizen/object(Just like an object we can pass function as an argument to another function, we can return a function from other function)
- Refer ```04-CallbackEx1.js```
- Any function that is passed as an argument to another function is called callback.
- A function which accepts a function as an argument or returns a function is called higher order function.
## Issue with Callback
- if u have multiple callback function where each level depends on the results obtained from previous level, nesting functions becomes so deep that the code becomes very difficult to read and maintain.
- 
# Promise
- Promise
  ```
                    |----->resolve---->then--->then--\
  Promise is Made---|                                 |-------> finally
                    |----->reject----->catch -----> /   
  ```
  - To crate promise and trigger reject and resolve action refer ```05-PromiseEx1.js and 05-PromiseEx2.js```
  - Promise Static methods
    - **Promise.all(...)** -> Querying multiple api's and perform some actions but only after all the api has finished loading data. example Promise.all([promise1, promise2....]).then((values)=>{})
      - if Promise.all(...) operation is success it will return results corresponding to each promise
      - if any of the promise fail/reject if any of the promises is fail/reject.
    - **Promise.allSettled(...)** ->
    - **Promose.race(...)** ->
   
# Async Await
## Async
- async keyword is used to declare async function. Async function returns promise.
- refer ```06-AsyncAwaitEx1.js```
## Await
- await only works inside async functions. we use it to pause your code until promise settles and return its result.
- refer ```06-AsyncAwaitEx2.js```

## Concurrent vs parallel execution
- refer ```06-AsyncAwaitEx3Sequential.js```
- refer ```06-AsyncAwaitEx4Concurrent.js```
- refer ```06-AsyncAwaitEx5Parallel.js```

