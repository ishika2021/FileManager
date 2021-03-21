let arr=[
    1,
    1.1,
    "Yo",
    null,
    true,
    {
        name:"ishika",
        age:22,
    }

];
console.log(arr);
console.log("val at idx 3",arr[3]);
//loop in array
for(let a in arr){
    console.log("key: ",a,"| value: ",arr[a]);
}
//updation in array
arr[15]="ishika";//the array we declared doesn't had any 15th index but by this line it will store "ishika" at 15th index and all the value above it which we hadn't define will have undefined value and now with this statement the length of the array has become 16.
console.log(arr);
console.log(arr.length);
console.log("val at idx 3",arr[11]);
arr["key"]="some value";
console.log(arr);
//const
const a=[1,2,3,4,5];//we can only update the 0th index value as a only have access to the address of first index
a.unshift(0);//this function is used to insert 0 at first index
console.log(a);
//remove from array
console.log(arr);
console.log("-------------------------------------------");
arr.pop();//removelast, addLast->push
console.log(arr);
//split-join
let string="My name is ishika";
let str=string.split(" ");
let jstr=str.join("+");
console.log(str);
console.log(jstr);


//freecode
