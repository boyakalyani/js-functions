i=0
s=0
while(i<10){
    var a=require("readline-sync").questionInt("number:")
    s=s+a
    console.log(s)
    i+=1
}