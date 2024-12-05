// typeof to get the type of any field
// Number(var), bigint(var), string(var), boolean(var), null(standalone value), undefined, symbol(unique) for conversion from one datatype to other

// Operations
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");  
console.log(+true);
console.log(+""); //0

  
// to know more about these go to the Abstract Operation=>type conversion in tc39.es(ECMA script) 
// Go to the documentation to know more

console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);  
console.log(null>=0);

//  the reason is that an equality check == and comparison ><>==<= work differntly comparison convert null to a number, treating it as 0. that's why (3) null>=0 is true and(1) null>0 is false.

console.log(undefined>0);
console.log(undefined==0);  
console.log(undefined>=0); // always false

// === strict check

