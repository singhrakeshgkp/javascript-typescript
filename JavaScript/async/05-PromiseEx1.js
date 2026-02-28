/* 1. we will do following things
a) how to create promise
b) how to change its status using resolve and reject functions
c) how to attach callback using then and catch functions on the promise object 

*/


// A : - Resolve Scenario
const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('Going office together');
    },5000)
});
promise.then(onResolve);

// B:- Reject scenario
const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Getting late, so leaving for office alone")
    },5000)
});

rejectPromise.catch(onRejection);


function onResolve(result){
    console.log(result);
    console.log('jffkdfjkff');

}

function onRejection(error){
    console.log(error);
    console.log('going alone');

}
