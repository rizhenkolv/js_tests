// LinkedLIst

//implementation LinkedList
class Node {
    constructor(data) {
        this.data = data// value
        this.next = null// link to the next node
    }
}
// create class for LinkedList
class LinkedList {
    constructor (head=null) {
        this.head = head;// link to the first node
        this.length = 0;// number of all nodes in Linked List
    }

    addToTheEnd(value) {
        let node = new Node(value);//creating the node using class Node
        if(this.length === 0) {
            this.head = node; //if there are no nodes
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.length++;
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear() {
        this.head = null;
    }
    getLast() {
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next
            }
            return lastNode;
        }
    }
    getFirst() {
        return this.head;
    }
    print() {
        let current = this.head;
        
        while(current) {
            console.log("Node: " + current.value);
            current = current.next;
        }
    }

}
//Testing of Linked List

let list = new LinkedList();
function testLinkedList() {
    console.log('before',list.print(),list.size()); //.print() doesn't work
    console.log('add 5',list.addToTheEnd(5)); 
    console.log('add 10',list.addToTheEnd(10));
    console.log('add 15',list.addToTheEnd(15));
    console.log('after',list.print(),list.size());

}

testLinkedList();



// create two list nodes and the pointer from node1 to node2
// let node1 = new Node(2);
// let node2 = new Node(5);
// node1.next = node2;

// //create LinkedList with the node1
// let list = new LinkedList(node1);




