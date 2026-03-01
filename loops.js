//if-else loop
var age = 19;
if(age >18){
    console.log("You are eligible ");
}else{
    console.log("You are not eligible ");
}

//switch-case 
var areaOfShapes = "Circle";
var a =5;
var b=10;
var r=2;
var result;

switch(areaOfShapes){
    case "Rectangle":
        result =a*b;
        console.log(result);
        break;
    case "Square":
        result=a*a
        console.log(result);
        break;
    case "Circle":
        result =22/7*r*r;
        console.log(result.toFixed(2));
        break;
    default:
        console.log("Sorry the shape is not available ");
}

//while-loop yp print 1 to 10 
var x=1;
while(x<=10){
    console.log(x);
    x++;
}

//do-while loop 
var x=2;
do{
    console.log(x);
    x++;
}while(x<=5)

//for-loop 
for(var z=1;z<=3;z++){
    console.log(z);
} 

//We avoid var in loops because it is function-scoped and causes unexpected behavior in asynchronous operations, while let is block-scoped and creates a new variable for each iteration.
//Use let in loops when value changes
//✔ Use const when value doesn't change
//❌ Avoid var


//generate a table 5 

for(var x =1;x<=10;x++){
    console.log("5 * "+x+ "="+ 5*x);
}
//generate a prime number checker 
//generate a even odd checker 
var q=10;
if(q%2==0){
    console.log("even");
}else{
    console.log("odd");
}
//program to check if a year is a leap year or not 
let year =2024;
if((year%4 ===0 && year%100 !==0) || year%400===0){
    console.log("leap year");
}else{
    console.log("not leap year");
}
//print * pattern 