//DataType boolean
// let b: boolean = false;
// console.log(b);
// //number
// let b:number = 10;
// console.log(b);
// //hexadecimal
// let d:number = 0o123;
// console.log(d);
//string
// let firstname: string = "Edureka!!";
// console.log(firstname);
// let array: string[] = ["TS", "JS"];
// console.log(array);
//enum
// enum fruit{
//     apple,
//     banana,
//     mango,
//     orange
// }
// let fruitname: string = fruit[2];
// console.log(fruitname);
//any
// let ag: any;
// ag =10;
// ag = "edureka";
//object
// function myfun()
// {
//     for(var i=1; i<=2; i++)
//     {
//         console.log("Welcome to edureka!!");
//     }
//     console.log("Final value of i is:"+i);
// }
// myfun();
//Function
// function product(x, y){
//     return x*y;
// }
// product(2,3);
// //anonymous
// let w = function(x,y)
// {
//     return x*y;
// }
// console.log(w(4,6));
var myclass = /** @class */ (function () {
    function myclass(k) {
        this.j = k;
    }
    myclass.prototype.value = function () {
        return ("The number is " + this.j);
    };
    return myclass;
}());
var myobj = new myclass(6);
console.log(myobj.value());
