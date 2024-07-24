// simplest example 

function foo(n: number): number{
    //base case 
    if(n === 1){
        return 1; 
    }

    // we shall recurse!
    return n + foo(n - 1); 
}; 

