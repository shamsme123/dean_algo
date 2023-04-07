class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Linkedlinst{
    constructor(){
        this.head=null;
        this.size=0;
    }

    getSize(){
        return this.size;
    }

    prepend(node){
        console.log("The Node ===>",node);
        if(this.size==0){
            this.head = node;
        }else{
            //node is the new node
            node.next = this.head; //head is stil pointing to the first node
            this.head = node;//new node becomes the 1st node as head pointer is pointing to it
        }

        this.size++;
    }
}

const node1 = new Node(100);
const node2 = new Node(200);

const list = new Linkedlinst();

console.log(list.getSize());
list.prepend(node1); //creating the 1st node in the list

console.log(list.getSize());
list.prepend(node2); //it will prepend a node before the 1st node

const newNode3 = new Node(1000);
list.prepend(newNode3);

console.log(list.getSize());
console.log("Linked List ==>",list);

