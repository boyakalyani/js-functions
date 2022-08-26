// i=0
// s=0
// while(i<=100){
//     if (i%2==0){
//         s=s+i
// //console.log(s)
//         i+=1  
//         console.log(s)  
//     }
// }//console.log(s)

s=0
for (var i=1;i<10;i++){
    if(i%2==0){
        //console.log(i)
        s=s+i
        console.log(s)
    }
}

var sum=0;
const n=100;
for (let i=1;i<=n;i++){
    sum+=i
}
console.log(sum)







var age=require("readline-sync").questionInt("enter the age:");
function eligibleforvote(age){
    if(age>=18){
        console.log("you are eligible"+age);
    }else{
        console.log("not eligible");
    }
}
console.log(eligibleforvote(age))
//var age=require("readline-sync").questionInt("enter the age:");



