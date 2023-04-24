class HashTable{
    constructor(arrsize){
        this.size = 0;
        this.table = new Array(arrsize);
    }

    hash(key){
        let hashSum = 0;
        for(let i=0; i<key.length; i++){
            console.log("key characters ===>",key.charCodeAt(i));
            hashSum = hashSum + key.charCodeAt(i)
        }
    
        console.log("hashString ===>",hashSum);
        console.log("this.table ===>",this.table);
        console.log("this.table ===>",this.table.length);
        return hashSum % this.table.length;
    }

    set(key,value){
      let index = this.hash(key);
      console.log("Index ===>",index);
      this.table[index] = [key,value];
      this.size++;
    }

    get(key){
       let index = this.hash(key);
       return  this.table[index];
    }
}

//const 
const table1 = new HashTable(100);
table1.set("Dean D","235-234234-234234");
table1.set("Shams Mahboob Islam","Bangalore, India, 829-69-29017");
const result = table1.get("Dean D");
console.log("Final Hash ===>",result);