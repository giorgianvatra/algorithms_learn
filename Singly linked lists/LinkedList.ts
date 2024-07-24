import ListNode from "./ListNode";

class LinkedList<T> {
    // types first

    head: ListNode<T> | null 
    length: number; 

    constructor(){
        //declaring 
        this.head = null; 
        this.length = 0; 
    }

    push(value: T) {
        const newNode = new ListNode<T>(value); 
        if(!this.head){
            this.head = newNode;
        }

        //if there are already nodes present 
        let current = this.head; 
        while(current.next){
            current =  current.next; //traversing the linked list 
        }
        current.next = newNode; 
        this.length++
    } 

    pop(){
        //already empty list
        if(!this.head){
            return ; 
        }

        //only head present, can be set to null directly; 

        if(this.length === 1){
            this.head = null; 
            this.length --;
        }
         
        //traverse to the end of the list
        //remove the link of the last node
        
        let current = this.head; 
        let prevNode = null; 

        while(current.next){
            prevNode = current; 
            current = current.next; 
        }
        
        prevNode.next = null; 
        this.length--; 
    
    }



}

const ll = new LinkedList<number>()
ll.push(10); 
console.log(ll)