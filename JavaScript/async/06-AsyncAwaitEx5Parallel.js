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
 

async function parallelExecutionEx(){ // start execution in parallel, since task2 will resolve first so it will print task2 first and then followed by task1 
    console.log('-----------------parallelExecutionEx start execution --------------------')
    Promise.all([
        (async () => console.log(await task1()))(),
        (async () => console.log(await task2())) (),
    ]);
}

parallelExecutionEx();