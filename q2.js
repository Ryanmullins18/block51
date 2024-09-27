// Reverse the given singly linked list by manipulating its head and return the reversed list. 
//The input is head = [1,2,3,4,5] and the expected output is [5,4,3,2,1]. never reven

class Node {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseGivenList(head, prev = null) {
    if (head === null) {
      return prev;
    }
    const nextNode = head.next;
    head.next = prev;
    return reverseGivenList(nextNode, head);
  }
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  const reversedList = reverseGivenList(head);
  
  let currVal = reversedList;
  const result = [];
  
  while (currVal !== null) {
    result.push(currVal.val);
    currVal = currVal.next;
  }
  
  console.log(result);
  

