//To print in JS
console.log("Hello PP:");
//working of a variable
let a;
a=10;
a=10.1;
a="Hi I am String";
a=true;
a=null;
console.log("a is",a);
//A program to find a number is prime or not.
let flag=true;
let num=23;
for(let i=2;i*i<=num;i++){
    if(num%i==0){
        flag=false;
        break;
    }
}
if(flag){
    console.log(num,"is prime");
}else{
    console.log(num,"is not prime");
}