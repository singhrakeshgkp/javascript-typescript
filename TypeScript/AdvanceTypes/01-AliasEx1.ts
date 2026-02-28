/* without alias */
/* let student: {
    id: number,
    name: string,
    age: number,
    isEligible: (age: number) => boolean // declared arrow function with boolean return type
} = 
{
    id:1,
     name: 'Rakesh singh',
     age: 31,
     isEligible: (age: number) =>{
        return age >= 18;
     }
    };

    console.log(voter.isEligible(18)); */

    /* if we want to create another student object we have to copy code from line 1 to line 6
    , it violates DRY (don't repeat yourself) principal.
    */


    /* With Alias */

type Student = {
    id: number,
    name: string,
    age: number,
    isEligible: (age: number) => boolean // declared arrow function with boolean return type
} 

let student1 : Student = {
    id: 1,
    name: "rakesh singh",
    age: 30,
    isEligible: (age: number) => age >= 18
};

let student2 : Student = {
    id: 2,
    name: "shiv",
    age: 28,
    isEligible: (age: number) => age >= 18
};

console.log("student 1 is eligible :- ",student1.isEligible(31));
console.log("student 2 is eligible :- ", student2.isEligible(31));



