//"aabcaabbccdefabc"

//find out which character is used the most in the string given.

//step1 - split
//['a','b','c']
//{} has the key 'a'?
//{a:1} has the key 'a'? : yes {a:2}

const generateMap = (str) =>{
    const newStrArr = str.split("");
    const hashMap = {};
    newStrArr.map((item)=>{
        if(hashMap[item]){
            console.log("if");
            hashMap[item] = hashMap[item]+1;
        }else{
            console.log("else");
            hashMap[item] = 1;
        }
    });
    console.log("hashMap ===>",hashMap);
    const vals = Object.values(hashMap);
    const keys = Object.keys(hashMap);
    const grtstNo = Math.max(vals);
    const indexofTheGreatestNo = vals.indexOf(grtstNo)
    console.log("vals ==>",vals);
    console.log("keys ==>",keys);
    return keys[indexofTheGreatestNo];
}

generateMap("aabcaabbccdefabc");