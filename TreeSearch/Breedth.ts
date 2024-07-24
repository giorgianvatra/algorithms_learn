export default function dfs(head: BinaryNode<number>, needle: number): boolean{
    const q : (BinaryNode<number> | null)[] = [head]; 

    while(q.length){
        const curr = q.shift() as BinaryNode<number> | undefined | null; 

        //search; 
        if(curr?.value === needle){
            return true
        }

        if(curr.left){
            q.push(curr.left)
        }
        if(curr.right){
            q.push(curr.right)
        }

        q.push(curr.left); 
        q.push(curr.right); 

    }

    return false; 
}