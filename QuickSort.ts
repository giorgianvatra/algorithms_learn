// divide and conque 

function qs(arr:number[], lo: number, hi: number): void {
    if(lo >= hi){
        return; 
    }

    const pivotIndex = partition(arr, lo, hi); 
    qs(arr,lo, pivotIndex - 1); 
    qs(arr,pivotIndex + 1, hi); 

}


function partition(arr: number[], low: number, hi: number):number {
    const pivot = arr[hi]; 
    let idx = low - 1;
    
    for(let i = low; i < hi; ++i){
        if(arr[i] <= pivot){
            idx++; 
            const tmp = arr[i]; 
            arr[i] = arr[idx]; 
            arr[idx] = tmp; 
        }
    }
    idx++ ; 
    arr[hi] = arr[idx]
    arr[idx] = pivot; 

    return idx; 

}


export default function quick_dort(arr: number[]): void{
    qs(arr, 0, arr.length-1); 
}