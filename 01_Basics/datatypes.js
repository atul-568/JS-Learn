// MDN and ic3 ECMA for Documentation
// "use strict"; treat all js code as newer version
// alert(3+3) we are using node js not browser

// primitive datatypes
// Number, bigint, string, boolean, null(standalone value), undefined, symbol(unique)

// const id = Symbol('123')
// const A_id = Symbol('123')
// console.log((id===A_id));

// Non-primitive(Referenced) datatypes
// object, array, function

// let a = [1,2,3,4]

// let b ={
//     name: war,
//     id:1
// }

// const myFunction=function(){}


// Stack(primitive hamesha hota hai) ,heap(Non-primitive(Referenced))



// NULL ka type => object hai
// undefined ka type => undefined hai
// typeof to check types.

const name = "Atul"
const password = "12345"
console.log(`my name is ${name} and the password is ${password}`);
// other way to define string :-        const gameName = newString('Atul')

const Gname = new String("atul")
console.log(Gname.__proto__);
console.log(Gname.toLowerCase());
//  for string method go check from the MDN documentation
