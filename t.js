// let n=require("readline-sync");
// let choose_ascii=(n.question("enter number: "));
// var ascii_char=97+choose_ascii
// for (var i=97;i<=ascii_char;i++) {
//        console.log(chr(i),end="");
// }



let c=require("readline-sync");
let loop_time=c.question("enter loop time: ");
 
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++) {
   let num=c.question("enter number: ")
   lis.append(num)
}
var maxi=lis[0];
for (let j=0;j<=loop_time;j++){
    if (maxi[maxi=lis[j]]){
    }
}
console.log(maxi)




// const result = {
//     success: ["max-length", "no-amd" ,"prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// }
//  const success=result.success
//  const store=success.length
//  for(const value in success){
//    console.log(success)
//  }
//console.log(success)