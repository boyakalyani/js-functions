var a=require("readline-sync").questionInt("enter number")
c=0
for(var i=2;i<a;i++){
    if (a%2==0){
        c+=1
        break
    }
}if (c==0){
        console.log(a+"its aprime number")
}else{
        console.log("its not a primtre");
}

