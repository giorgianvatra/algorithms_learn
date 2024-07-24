const a: number[] = []; 

function time(fn: () => void): number{
    const now = Date.now(); 
    fn(); 
    return Date.now() - now; 
}

function unshift(number: number){
    for(let i = 0; i < number; ++i){
        a.unshift(Math.random()); 
        }
}

function shift(number: number){
    for(let i = 0; i < number; ++i){
        a.shift();
    }

function push(number: number){
    for(let i = 0; i < number;  ++i){
        a.push(Math.random()); 
    }
}
}