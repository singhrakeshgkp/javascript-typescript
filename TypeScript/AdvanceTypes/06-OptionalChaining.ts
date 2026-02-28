type Employee = {
    salary: number,
    name?: string
}

function getEmployee(id: number,name: string) : Employee | null | undefined {
    return id === 0 ? null : {salary: 40000,name: name}
}

let employee = getEmployee(0,'rsingh');

//without optional chaining
/* if(employee != null && employee != undefined){
console.log(employee.salary)
} */

/* 1. with optional property access operator */

console.log(employee?.salary)
console.log(employee?.name?.length)  // name in Employee is also optional so chained it.

/* 2. Optional element access operationr 
lets say i have an array 
*/
let names: string[] = ["rakesh","suresh","mahesh"];
console.log(names[0]?.toUpperCase) //used optional instead of adding null and undefined check in if block

/* 3. optional call */
let msg : any = (message: string) => console.log("this is optional call example passed message is :- "+message);

msg("test msg") // this will work

msg = null;
//msg("test here msg is initialized wit null") // it will break as msg is null, so better to use optional call operatior

msg?.('test with null function')
