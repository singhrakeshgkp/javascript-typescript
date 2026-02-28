async function greet() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=> resolve("Hello"),2000)
    });
let result = await promise;  // wait until promise resolve
console.log(result);
}

greet();