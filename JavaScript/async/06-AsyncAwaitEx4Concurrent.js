function task1(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('Task1');
        },5000);
    });
}

function task2(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("task 2");
        },4000)
    });
}
 

async function concurrentExecutionEx(){ // will take 5 sec to finish its execution
    console.log('-----------------concurrentExecutionEx start execution --------------------')
    const tsk1 = task1();
    const tsk2 = task2();
    console.log(await tsk1);
    console.log(await tsk2);
}

concurrentExecutionEx();