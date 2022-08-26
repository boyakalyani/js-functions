var year=require("readline-sync").questionInt("enter the leap year")
if (year%4==0){
    if (year%100==0){
        if (year%400==0){
            console.log(year+"it is a leap year")
        }else{
            console .log(year+"its not a leap year")
    }        
    }else{
        console.log(year+"its  a leap year")
}
}else{
    console.log(year+"it is not a leap year")
}