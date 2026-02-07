# Table of contents

-  [Variables](#Variables)
  - [String immutability](#String-immutability)
  - [Array](#Array)
- [Function](#function)




## Variables
- we can declare variables three way. 1) using var- Global. 2) let - scoped 3) const - constant
```
 var nameOrAge = "rsingh"
 nameOrAge = 30
 let nameOrAge = "rakesh singh"
 const nameOrAge="rsingh"
```
- **check type**
  ```
   var msg="";
  if (typeof msg != "undefined")
  continue code....
  ```
- **Variable Scope**
  ```
    function a(){ var msg = "test"} // if var used and variable is inside function of block like for it scope will be limited where it is declared.
    function b(){msg = "test"} // here we have not used var, so its scope is global we can use it in any other function.
  ```
- if u have local and global variable with same name, in this case local variable take precedence.
- 
- 
### String immutability
- var msg= "hello workd", msg[0]="G"   (not possible), complete variable value we can change lik msg = "welcome to this session"

### Array
- to insert element we use ```push()``` and to delete element we use ```pop()```. ```shift()``` mthod we use to remove first element from array


## Function
- **defining function**-    ```function abc(){... }```
- **returning value from function** - ```function abc(){return "welcome"}```
- **undefined value return from function** -  if we don't use return keyword in function it will by default return "undefined"
- **Asignment with a returned value**



