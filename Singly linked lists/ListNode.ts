class ListNode<T> {
    // declaring types
    value : T; 
    next : ListNode<T> | null // type listNode or null 

    constructor(value : T){
        this.value = value;
        this.next = null; 
    }

}

export default ListNode; 