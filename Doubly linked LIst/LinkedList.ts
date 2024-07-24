interface LinkedList<T> {
    get length(): number; 
    insertAt(item: T, index: number): void; 
    remove(item:T): T | undefined; 
    removeAt(index: number) : T |undefined; 
    append(item:T): void; 
    prepend(inte: T): void; 
    get(intex: number) : T | undefined; 
}

type Node<T> = {
    value: T, 
    prev?: Node<T>, 
    next? : Node<T>, 
}

export default class DoublyLinkedList<T> {
    public length: number; 
    private head?: Node<T>; 
    private tail?: Node<T>; 

    constructor(){
        this.length = 0; 
        this.head = undefined; 
    }

    // prepend adding node as the firs node
    prepend(item:T):void{
        //create node 
        const node = {value: item} as Node<T>; 
        //increase the length
        this.length++; 
        //check if the head exists!! if not, the new node will be the head; 
        if(!this.head){
            this.head = this.tail = node;
            return;  
        }
        //node points to the head
        node.next = this.head. 
        //the previous of the head = node
        this.head.prev = node;
        //head becomes the node
        this.head = node; 
    }

    inserAt(item:T, idx: number):void{
        if (idx > this.length){
            throw new Error("of no"); 
        }else if(idx === this.length){
            this.append(item); 
            return; 
        }else if(idx === 0){
            this.prepend(item); 
            return; 
        }
        
        this.length++ ; 
        let curr = this.head;
        for(let i =  0;curr && i < idx; i++){
            curr = curr.next; 
        }

        curr = curr as Node<T>; 
        const node = {value: item} as Node<T>; 

        node.next = curr; 
        node.prev = curr.prev; 
        curr.prev = node; 
        if(node.prev){
            node.prev.next = curr; 
        }

    }
    append(item:T):void{
        this.length++; 
        const node = {value: item} as Node<T>
        if(!this.tail){
            this.tail = this.head = node; 
            return; 
        }

        node.prev = this.tail; 
        this.tail.next = node; 
        this.tail = node; 
    }
    remove(item:T):T | undefined{

        let curr = this.head; 
        for(let i = 0;curr && i < this.length; i++){
            if(curr.value === item){
                break; 
            }
          curr = curr.next;   
        }
        if(!curr){
            return ; 
        }

        this.length--; 

        if(this.length === 0){
            const out = this.head.value; 
            this.head = this.tail = undefined; 
            return out; 
        }

        if(curr.prev){
            curr.prev = curr.next
        }
        if(curr.next){
            curr.next = curr.prev; 
        }
        curr.prev = curr.next = undefined; 

        if(curr = this.head){
            this.head = curr.next; 
        }
        if(curr === this.tail){
            this.tail = curr.prev; 
        }

        curr.prev = curr.next = undefined
        return curr.value; 


    }
    get(idx: number): T |undefined{
        const node =  this.getAt(idx)?.value; 
        return node  

    }
    removeAt(idx:number): T | undefined{
        
    }
    private getAt(idx: number): Node<T> | undefined{
        let curr = this.head; 
        for(let i = 0;curr && i < this.length; i++){
            curr = curr.next; 
            }
          curr = curr;   
        }
    }


    