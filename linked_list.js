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
    constructor (head = null) {
        this.head = head;// link to the first node
        this.length = 0;// number of all nodes in Linked List
    }

    addToTheEnd(data) {
        let node = new Node(data);//creating the node using class Node
        if(this.length === 0) {
            this.head = node; //if there are no nodes
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.length++;
        return 'done';
    }

    insertInPosition(position, data) {
        if(position < 0 || position > this.length) {
            return 'Incorrect value of position';
        }
        let node = new Node(data);
        if( position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = node;
            node.next = current;
        }
        this.length++;
        return 'done';
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

    getNodeByPosition(position) {
        if(position < 0 || position > this.length) {
            return "Incorrect value of position"
        }

        let current = this.head;
        let index = 0;

        while(index < position) {
            current = current.next;
            index++;
        }
        return current.data; 
    }

    removeFromPosition(position) {
        if(position < 0 || position > this.length) {
            return "Incorrect value of position"
        }
        let current = this.head;

        if(position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = current.next;
        }
        this.length--;
        return current.data;

    }
    print() {
        let current = this.head;
        
        while(current) {
            console.log(`Node:${current.data}`);
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
    console.log('getNodeByPosition: ', list.getNodeByPosition(1));
    console.log('insertInPosition: ', list.insertInPosition(1,77));
    console.log('getNodeByPosition: ', list.getNodeByPosition(1));
    // console.log('removeFromPosition: ', list.removeFromPosition(1));
    // console.log('getNodeByPosition: ', list.getNodeByPosition(1));
    console.log(list.print());

}

testLinkedList();



// create two list nodes and the pointer from node1 to node2
// let node1 = new Node(2);
// let node2 = new Node(5);
// node1.next = node2;

// //create LinkedList with the node1
// let list = new LinkedList(node1);




