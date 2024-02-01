//in js let and var are the same keywords but dues to some issues var was not further in use 
 
const accountId = 1234     //will not be changed
let accountEmail = "skshvts@gmail.com"   //can be changed
var accountPassword = "123"  //can be changed

accountCity ="Delhi"   //can be changed OR updated
//this way can be use that without declaration we can declare variable but it's not a good practice

let accountState; //js ignores some of the mistake so it is not neccessary to put semicolum 
//accountId = 2 (NOT ALLOWED)

accountEmail ="sakshivats@gmail.com"
accountPassword ="345"
accountCity = "jaipur"


console.log(accountId); //when we have to print only 1 

//want to print all inputs
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])