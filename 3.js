// function perfect(num){
//     sum=0
//     for(var i=1;sum<num;sum+=i){    
//         if(num%i === 0){
//         }
//     }
//     if(sum === num){
//         console.log(num," is a perfect number");
//     }
//     else{
//         console.log(num," is not a perfect number");
//     }
//  }
//  perfect(0);



function perfect(num){
    a=0
    for(var i=1;a<num;a+=i){
        if(num%i===0){
        }
    }if(a===num){
        console.log("perfect")
    }else{
        console.log("not perfect")
    }
}
perfect(4 )
