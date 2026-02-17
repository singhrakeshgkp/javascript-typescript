# Table of contents
- [Basic](#Basic)
  -  [Variables](#Variables)
    - [checking type](#checking-type)
    - [Variable Scope](#variable-scope)
    - [String immutability](#String-immutability)
    - [Array](#Array)
  - [Function](#function)
  - [Operators](#Operators)
  - [Object](#object)
  - [Prevent Object Mutation](#prevent-object-mutation)
  - [Functions](#functions)
- [Asynchronous](/asynchronous.md)

# Basic

## Variables
- we can declare variables three way. 1) using var- Global. 2) let - scoped 3) const - constant
```
 var nameOrAge = "rsingh"
 nameOrAge = 30
 let nameOrAge = "rakesh singh"
 const nameOrAge="rsingh"
```
- **checking type**
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


## Operators
- **==(equality) vs ===(strict equality)** --> if we have two variable lets say ```var a=20, var b= '20'```  ```a==b this statement return true, however a===b return false``` === operator known as strict equality.
- **!= (inequality) vs !==(strict inequality)** --> strict inequality is oposite to strict equality.

## Object
### Accessing object properties with using bracket notation
-  refer ```1-ObjectEx1.html```, run it and check console log.
### Accessing complex object property
- refer ```1-objectEx2.html```
### With Object use getter and setter
- refer ```1-ObjectEx3.html```


## Prevent Object mutation
- Refer ```2-ObjectMutationEx1.html```
- Using ```const``` keyword example const msg = "test".
- Limitation of const --> even if we use keyword ```const``` with array or object we can mutate them, to get rid of this we will use ```freeze```


## Functions
- refer ```3-FunctionsEx1.html```
  - Functions with name
  - Anonymous Function
  - Arrow Function
- Higher Order Function -> Higher order function does one of the following things
   - Takes anothe function as an argument
   - Return another function as its result.
  - refer ```3-FunctionEx2.html```

## Destructuring
- refer ```DestructuringEx1.html```

## Some Common Operation
- Creating string using template literals
- Writing concise object literal Declarations using simple Fields
- write concise declarative function
- Use a class syntax to define a constructor function
