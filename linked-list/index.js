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
            this.head = node;
        }else{
            //node is the new node
            node.next = this.head; //head is stil pointing to the first node
            this.head = node;//new node becomes the 1st node as head pointer is pointing to it
        }

        this.size++;
    }

    append(node){
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

    print(){
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

    insertNode(node,position){ //insert at postion 2
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
        for(let i=0; i<position-1; i++){ //0,1
            prev = prev.next;
            //console.log();
        }

        node.next = prev;
        //prev.next = node;
        //node.next = 

        console.log(`Node at postion no ${position}`,prev); //2nd position
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
