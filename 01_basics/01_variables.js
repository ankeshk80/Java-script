const accountId = 144553
let accountEmail = "ankesh@gmail.com"
var accountPassword = "12345"
accountCity = "Raipur"
let accountState;  // undefined since value is not assigned

// accountId = 2 // not allowed due to const keyword

accountEmail = "qwerty@gmail.com"
accountPassword = "147"
accountCity = "bihar"

console.log(accountId);


/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])
