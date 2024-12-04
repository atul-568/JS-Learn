const accountId=55421
let accountEmail="a@gmail.com"
var acocuntPassword = "12345"
accountCity="Jaipur"
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

// accountId=3   not allowed
console.log(accountId);

accountEmail="bob@gmail.com"
acocuntPassword = "00045"
accountCity="Dholakpur"
console.table([accountId,accountEmail,accountCity,acocuntPassword,accountState]);
