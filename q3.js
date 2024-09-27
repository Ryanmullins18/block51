//How can we remove nodes with a specific value from a linked list, 
//and what should be returned as the new head of the modified list? 
//The given linked list has a head node [1,2,6,3,4,5,6] and the specified value is 6. 
//The expected output is a modified list with nodes [1,2,3,4,5]. 

class Node {
    constructor(val=0, next=null) {
        this.val= val;
        this.next = next;
    }
}

function removeNode(head, val) {
    if(head === null) {
        return null;
    }
    head.next = removeNode(head.next,val);
    return head.val === val ? head.next : head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(6);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(5);
head.next.next.next.next.next.next = new Node(6);

const newVal = 6;
const newHead = removeNode(head, newVal)

let curr = newHead;
const result = [];

while(curr !== null) {
    result.push(curr.val);
    curr=curr.next
}

console.log(result);