function shownumbers(limit){
    i=0
    while(i<=limit){
        if(i%2===0){
            console.log("EVEN",i)
            i++
        }else{
            console.log("ODD",i)
            i++
        }
    }
}
var limit=require("readline-sync").questionInt("enter the number:-")
shownumbers(limit)