/* 1. Then function */


const promiseObj1 = new Promise((resolve,reject) => {
    const success = true;
    setTimeout(()=>{
        if (success){
            resolve("Operation is successfull");
        }else{
            reject("Operation failed");
        }
    },2000);
})
const onSuccess = (data) =>{
    console.log('on success '+data)
}

const onFailure = (error) => {
    console.log('rejected '+error)
}

// A:- Passing onResolve and onReject function one by one
promiseObj1.then(onSuccess);
promiseObj1.catch(onFailure);
// B:- Passing onResolve and onReject in one go
promiseObj1.then(onSuccess,onFailure);

//C :- chaining promise like promiseObje1.then(fun1).then(fun2).then(fun3)........then(funtn)
promiseObj1.then(onSuccess).catch(onFailure);



