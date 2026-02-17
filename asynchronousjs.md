# Table of contents
- [Asynchronous](#Asynchronous)
  - [setTimeout and Intervals](#setTimeout-and-Intervals)
 



# Asynchronous
## Timeout and Intervals
- **setTimeout** -> executes a particular block of code after the specified time has elasped
  -  Syntax ```setTimeout(function, duration, param1, param2, ....)```
    - First parameter is a function to run, or a reference to a function defined elsewhere.
    - Second parameter is duration.
    - After second parameter we can pass zero or more values that represent any parameters you want to pass to pass function.
  - refer ```01-TimeoutEx1.js```
- **clear timeout** -> To clear a timeout, you can use clearTimeout function. when callingClearTimeOut you have to pass in identifier returned by setTimeout
  - refer ```01-TimeoutEx1.js``` section point 3 in this file.
- setTimeout is also asynchronous but isse with this is if u have multiple task it might become callback hell (function call tree)
- Promise
  ```
                    |----->resolve---->then--->then--\
  Promise is Made---|                                 |-------> finally
                    |----->reject----->catch -----> / 
  
  ```
