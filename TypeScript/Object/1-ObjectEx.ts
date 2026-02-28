
/* 1. Define an  object */
let employee1: {
    id: number,
    name: string,
    age: number
} = {id:1, name: 'Rakesh singh',age: 31};

console.log(`Employee1 details is ${employee1.name}`)

/* 2. define object with optional property */

let employee2: {
    id: number,
    name: string,
    age?: number
} = {id:1, name: 'Mayank singh'};

console.log(`Object with optional property: Employee2 details is ${employee2.name}`)
employee2.name = 'Mayank kumar';

console.log(`Object with optional property and mutated name: Employee2 details is ${employee2.name}`)

/* 3. Object with read only property*/

let employee3: {
    id: number,
    readonly name: string,
    age?: number
} = {id:1, name: 'Aryan singh'};

console.log(`Object with readonly property: Employee2 details is ${employee3.name}`)
//employee3.name = 'aryan kumar'; // this will give compilation error
