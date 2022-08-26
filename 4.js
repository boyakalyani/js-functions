function average(num1,num2,num3){
    console.log("sum of",num1+num2+num3)
    console.log("average of",(num1+num2+num3)/3)
}
let num1=require("readline-sync").questionInt("enter num1:-")
let num2=require("readline-sync").questionInt("enter num2:-")
let num3=require("readline-sync").questionInt("eneter num3:-")
average(num1,num2,num3)