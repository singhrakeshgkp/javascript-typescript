/* 1- Function without explicit return type, it will infer return type from value its returning. Best pratices we should always specify return type 
if we don't specify `return``` which is at line number 6, compiler will assume it as void
*/

function getDetails1 (name: string, age:number){
    return `${name} is ${age} year old`
}

console.log(getDetails1('rakesh',31));

/* 2. Function with explicit return type */

function getDetails2(name: string, age: number): string{
    return `${name} is ${age} year old` 
}

console.log(getDetails1('rakesh singh',31));

/* 3. Function with optional parameter. yearOfBirth?  question mark symbol is used to make it optional */
function isEligibleToPlay(name: string, yearOfBirth?: number) : boolean{
    let isEligibleToPlay = false;
    if ((yearOfBirth || 2000) > 1995 && (yearOfBirth || 2000)<2010){
        isEligibleToPlay = true;
    }
    return isEligibleToPlay;
}

console.log(isEligibleToPlay("A", 1998));
console.log(isEligibleToPlay("B", 1994));


// in below case function will receive undefined value but we have handling for it like (yearOfBirth || 2000). if yearOfBirth is undefined  compiler will consider 2000 

console.log(`Function with optional parameter  ${isEligibleToPlay("A")}`);


/* 4. Instead of making yearOfBirth optional we can give default value. If we don't pass any value function with apply default value */

function isEligibleToPlay2(name: string, yearOfBirth= 2022) : boolean{
    let isEligibleToPlay = false;
    if (yearOfBirth > 1995 && yearOfBirth<2010){
        isEligibleToPlay = true;
    }
    return isEligibleToPlay;
}


console.log(`Function with default value  ${isEligibleToPlay("A")}`);