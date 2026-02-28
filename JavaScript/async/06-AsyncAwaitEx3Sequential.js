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
 async function sequentialExecutionExample(){ // will take 9 sec (4+5) to finish execution
    console.log('-----------------sequentialExecutionExample start execution --------------------')
    const tsk1 = await task1();
    const tsk2 = await task2();
    console.log(tsk1);
    console.log(tsk2);
}
sequentialExecutionExample();
