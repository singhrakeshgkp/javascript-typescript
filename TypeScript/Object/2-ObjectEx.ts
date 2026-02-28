let voter: {
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

    console.log(voter.isEligible(18));