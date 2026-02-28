
/* 1. Lets say i have a function greet, i want if value non null it should greet you if its null or undefined something else should be log in the console
if we pass null when calling it it will give compilation error to avoid it we can use union type name | null | undefined
*/
function greet(name: string | null | undefined){
    if (name){ //if name have value, its not null or undefined
        console.log(`Welcome ${name} to type script session`);
    }else {
        console.log('name is null or undefined')
    }
}

greet('rsingh')
greet(null)
greet(undefined)