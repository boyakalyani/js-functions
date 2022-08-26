var a=require("readline-sync").questionInt("enter: ")
// i=0
// while (i<=100){
//     if(i%7==0){
//         console.log(i);
//     i+=1
//     }
// }

var s=""
for (var i=1;i<=a;i++){
    if (i%7==0){
        s+=i+"+"
    }
}
console.log(s) 


// for (var i=100;i>=a;i--){
//     if (i%7==0){
//         console.log(i)
//     }
// }


