# Type Script
- [Setup](#setup)
- [Types](#types)
  - [any type](#any-type)
  - [array](#array)
  - [tuples](#tuples)
  - [enums](#enums)
- [Functions](#Functions)
- [Objects](#Objects)
- [Advance Types](#Advance-types)



# Setup
- install node and type script. verify typescript using ```tsc -v ``` command

## First Program
- create a file ```helloworld.ts```
- compile it using ```tsc helloworld.ts```
- see new file with .js extenstion will be created.

## Configure type script compiler
- From terminal run ```tsc --init``` tscconfig.json file will be generated. configure ```"rootDir": "./src", "outDir": "./dist","removeComments": true,"sourceMap": false,"declaration": false,"declarationMap": false,```
- now run tsc, check dist folder compiled file should be generated in that location.

## Debugging 
- in vs code, click debug icon in left from left panel menu. Launchprogram-->node.js-->new file launch.json will be geneated. configure ```preLaunchTask``` in it.
-   ---------- pending

# Types
- java Script--> number, string, boolean, null, undefined, object
- type script --> any, unknown, never, enum, tuple
 ## any type
 - if we declare a variable and don't initialize it, compiler will assume its type as any ```let msg;``` we can initialize it will multiple type as shown below. Best pratices to avoid any time as much as possible.
   ```
    msg = "welcome"; can initialize it with string and then number
    msg = 444; 
   ```
## Array
- Allow same type elements in array, however in java script we can have one element of type number and another string .. so on
```
let marks: number[] = [];
```

## tuples
- is a fixed length array where each element is a particular type. Best pratices to use if u have two value, in case of multiple value it create confusion like employee we don't know what to pass in first and second parameter.
  ```
  let studentNameAndAge: [string,number] = ["rakesh",30];
  let employee: [String,String,number] = ["rakesh","singh",30];
  ```
## enums
- represent list of related constants.
  ```
    const small = 1;
    const medium = 2;
    const large = 5;
    OR
    enum Size {Small=1, Medium=2, Large = 5}  // if we define enum with const keyword the compiler will generate more robust java script code.
    let sSize: Size = Size.Medium
  ```


  # Functions
  - Define functions refer ```1-FunctionEx.ts``` use ``npx ts-node 1-FunctionEx.ts``` command to run it. verify output in console.

  # Objects
  - create objects refer ```1-ObjectEx.ts```
  - create function within object refer ```2-ObjectEx.ts```
 
# Advance types
- Alias
- Union
- Intersection
- Literal
- Nullable
- Potional
    
   
