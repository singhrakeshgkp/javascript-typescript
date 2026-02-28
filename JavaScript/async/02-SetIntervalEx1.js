let counter =1;
function greet(){
      counter +=1;
    console.log('running greet task: counter value is : - '+ counter);

    if(counter>=5){
        clearInterval(intervalRef);
    }
}

const intervalRef = setInterval(greet, 2000);  // it will call greet function after every 2 second
