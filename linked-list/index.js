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

    prepend(node){ //1 //1 O(1) linked-list prepend
        console.log("The Node ===>",node);
        if(this.size==0){
            this.head = node; //o(1)
        }else{ //o(1) number of inputs
            //node is the new node //10,000 10,001th 0th=node
            node.next = this.head; //head is stil pointing to the first node
            this.head = node;//new node becomes the 1st node as head pointer is pointing to it
        }

        this.size++;
    }

    append(node){ //o(n) 10,000 10,001 10.000+.3
        if(this.size==0){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next!=null){ //Breaking condition: prev.next!=null
                prev = prev.next; //increment
            }//breaking condition prev.next =null
            prev.next = node;
        }

        this.size++;
    }

    print(){ //o(n)
        //[100],[200],[500],[700]
        let prev = this.head;
        let printVal = this.head.value; //100
        let i =0;
        while(prev.next){
            console.log(`printVal ==>,${printVal}`);
            prev = prev.next;
            printVal = printVal + " " + prev.value;
            i++
        }
        return printVal;
    }

    insertNode(node,position){ //insert at postion 2 //o(n)
        if(position==0){
            this.prepend(node);
            return;
        }

        if(position==this.size){
            this.append(node);
            return;
        }

        if(position>this.size){
            console.log("Sorry, postion does not exist");
            return;
        }

        let prev = this.head; //root node
        for(let i=0; i<position-1; i++){ //0 3-4 999 999-1=998
            console.log("Prev with in loop: before update ===>",prev.value);
            prev = prev.next;
            console.log("Prev with in loop: after update ===>",prev.value);
        }

        console.log(`After exiting the loop,Node at postion no ${position-1}`,
        prev.value,prev.next); //2nd position

        node.next = prev.next; //700.next = 100.next=500

        console.log("prev.next Before ===> in the function",prev);

        prev.next = node; //100.next = 700 100.next=500 100.next = 700

        console.log("prev.next after ===> in the function",prev);

        console.log("The linkedList 2 ===>",list);
    }

    deleteNode(position){//execution context o(n)
        console.log("<<<<<<<<<<<< Delete >>>>>>>>>>>");
        let prev = this.head; //root node
        for(let i=0; i<position-1; i++){ //0 3-4 10,000 9,999 = o(n)
            console.log("Prev with in loop: before update ===>",prev.value);
            prev = prev.next;
            console.log("Prev with in loop: after update ===>",prev.value);
        }

        console.log("Delete: prev after loop exit ===>",prev.next.next);
        //700
        //prev.next = 
        prev.next = prev.next.next;
    }
}

//const node1 = new Node(100);
//const node2 = new Node(200);

const list = new Linkedlinst(); // we are creting an empty linked list

// console.log(list.getSize());
// list.prepend(node1); //creating the 1st node in the list

// console.log(list.getSize());
// list.prepend(node2); //it will prepend a node before the 1st node

// const newNode3 = new Node(1000);
// list.prepend(newNode3);

// console.log(list.getSize());
// console.log("Linked List ==>",list);

console.log(list.getSize());
const node1 = new Node(200);
const node2 = new Node(100);
const node3 = new Node(500);
list.append(node1); //stopping
console.log("1st append ======>");
list.append(node2);
console.log("2nd append ======>");
list.append(node3);
console.log("3rd append ======>");
console.log("========== Print Test ===========");
console.log(list.print());

const node4 = new Node(700);
list.insertNode(node4,2);

console.log(list.print());
console.log(list);

list.deleteNode(2); //when we are calling it, makes it an execution context
console.log(list.print());
console.log(list);

