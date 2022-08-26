// function checknumberslist(list1,list2){
//     i=0
//     while(i<list1.length){
//         if(list1 && list2[i]%2===0){
//         console.log("both even numbers",list1[i],list2[i]);
//         i+=1
//         }
//         else{
//         console.log("both not even",list1[i],list2[i])
//         i+=1
//         }
//     }
// }
// checknumberslist([2,6,18,10,3,75],[6,19,24,12,3,87])




function checknumberslist(list1,list2){
    i=0
    while(i<list1.length){
        if(list1 && list2 [i]%2===0){
            console.log("even")
            i+=1
        }else{
            console.log("not even")
            i+=1
        }
    }
}
checknumberslist([2,6,18,10,3,75],[6,19,24,12,3,87])
