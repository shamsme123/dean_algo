class HashTable{
    constructor(arrsize){
        this.size = 0;
        this.table = new Array(arrsize);
    }

    hash(key){
        //key = "Dean D"
        let hashSum = 0;
        for(let i=0; i<key.length; i++){ //D e a n space D
            console.log("key characters ===>",key.charCodeAt(i));
            hashSum = hashSum + key.charCodeAt(i)
            //hashsum = 0 + 68 = 68
        }

        //heashsum = 427
    
        console.log("hashString ===>",hashSum);
        console.log("this.table ===>",this.table);
        console.log("this.table ===>",this.table.length);
        return hashSum % this.table.length;
        //Dean D => 427%100 => 27
    }

    set(key,value){//o(1)
        //key= "Dean D"
      let index = this.hash(key);
      //index=27
      console.log("Index ===>",index);
      this.table[index] = value;
      //arr[27] = 235-234234-234234;
      this.size++; //1
    }

    get(key){//o(1)
       let index = this.hash(key);
       //index=27
       return  this.table[index];
       //arr[27] = 235-234234-234234
    }

    remove(key){//o(1)
        let index = this.hash(key);
        //27
        this.table[index]=undefined;
        return this.table;
    }
}

//const 
const table1 = new HashTable(100);
table1.set("Dean D","235-234234-234234");
table1.set("Shams Mahboob Islam","Bangalore, India, 829-69-29017");
const result = table1.get("Dean D");
console.log("Final Hash ===>",result);
const table2 = new HashTable(3000);