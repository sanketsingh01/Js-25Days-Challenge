const accountId = 123456;
let accountEmail = "hitesh@google.com";
var accountPasword = "1235566";
accountCity = "jaipur";
let accountState;

// accountId = 2; So, we investigated that we cannot chnage the const value

accountEmail = "sanket@gamil.com";
accountPasword = "1122";
accountCity = "Bangluru";

/*
Perfer not to use var
beacuse of issue in block scope and functional scope
*/

console.log(accountEmail);
console.table([accountId, accountEmail, accountPasword, accountCity, accountState]);