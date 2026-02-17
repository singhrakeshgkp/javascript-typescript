# Table of contents
- [Asynchronous](#Asynchronous)
  - [Timeout and Intervals](#setTimeout-and-Intervals)
  - [Recursive Timeout vs Interval](#recursive-timeout-vs-interval)
 



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
- **setInterval** -> Keeps the task running forever, it must be clear when appropriate.  

## Recursive Timeout vs Interval

# Promise
- Promise
  ```
                    |----->resolve---->then--->then--\
  Promise is Made---|                                 |-------> finally
                    |----->reject----->catch -----> / 
  
  ```
