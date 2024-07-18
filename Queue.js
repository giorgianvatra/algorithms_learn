class Queue{
    constructor(){
      this.tail = this.head = undefined; 
      this.length = 0; 

    }

    enqueue(T){ 
        const node = {value}
        this.length++; 


        if(!this.tail){
            this.tail = this.head = {value};
        }
        this.tail.next = node; 
        this.tail = node; 
    }
    dequeue(){
        if(!this.head){ // deleting first node
            return undefined;
        }
        this.length--; 
        const head = this.head; 
        this.head = this.head.next;
        head.next = undefined; 

        return head.value; 
    }
    peek(){ //getting the head value
        return this.head.value; 
    }
}