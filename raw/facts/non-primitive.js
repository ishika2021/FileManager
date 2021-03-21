//function,array,objects

function hello(param){
    console.log("Greetings everyone with",param);
    return "returned val";
}
hello("Hii");
let rVal=hello("Hola");
console.log(rVal);

//object-> key:value
let obj={
    name:"Ishika", //this "ishika" is called propoerty of obj
    lastName:"Mishra",
    address:{
        city:"LKO",
        state:"UP"
    },
    isAvenger:true,
    age:22,
    movies:["Harry Potter","After","Yo"],
    sayhi: function(param){ //this function will be called method of obj
        console.log("cap say's hi",param);
        return "return blessings";
    }
}
console.log("address object",obj.address.city);
console.log("address object",obj.movies[1]);
//access function inside a dictionary
console.log("address object",obj.sayhi("I am ishk")); //first obj function will run hence "cap say's hi I am ishk" will print then as the function returns something it will return "return blessings" hence "address object return blessings" will be printed

//set -> update
console.log(obj);
console.log("---------------------------------------------");
obj.friends=["shreya","richa","parul","dips","raj"];
console.log("--------------------------------------------");
console.log(obj);

//for-in-loop
for(let key in obj){
    console.log("key:",key,"| value :",obj[key]);
}