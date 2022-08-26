// var table=require("readline-sync").questionInt("enter the table number")
// var num=1;
// for(num;num<=10;num++){
// // var table=require("readline-sync").questionInt("enter the table number");
// console.log(table+"*"+num+'='+table*num);
// }








var num=require("readline-sync").questionInt("enter the numbewr")
while (num<=10){
    if (num%2==0){
        console.log(-(num));
        num++
    }
    else{
        console.log(num)
        num++
    }
}



// var num=require("readline-sync").questionInt("enter the numbewr")
// for(let i=1;i<=num;i++){
//     if (i%2==0){
//         console.log(-(i))
//     }else{
//         console.log(i);
//     }
// }



