// converting string to number through parseInt

var myString ="412.5";
var myNumber = parseInt(myString);
console.log(myNumber);

//converting string to float through parseFloat 
var myString ="412.5";
var myNumber = parseFloat(myString);
console.log(myNumber);

//converting string to number using typeof operater 
 var myFavNumber="10";
 console.log(myFavNumber , typeof myFavNumber);
 console.log(typeof +myFavNumber);
 console.log(typeof Number(myFavNumber));

 // converting a number to a string 
 let str=5;
 console.log(str, typeof str);
 console.log(typeof String(str));