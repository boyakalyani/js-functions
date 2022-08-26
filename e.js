var a=require("readline-sync").question("entere")
var b=a
var c=""
for(var i=b.length-1;i>=0;i--){
    c=c+b[i]
}if (c==b){
    console.log("its palindram")
}else{
    console.log("its not")
}

