i=0
while(i<20){
    i+=1
    if (i%3==0){
        console.log("nav")
    }else if(i%7==0){
        console.log("gurukul")
    }else if(i%3==0 && i%7==0){
        console.log("nav gurukul")
    }else if(i%3!=0 && i%7!=0){
        console.log(i)
    }
}