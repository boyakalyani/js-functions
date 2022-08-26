function license_checker(speed){
    if(speed < 70){
        console.log("ok");
    }else if(speed>70){
        points=(speed-70)/5
        console.log(points)
    }if(points>12){
            console.log("lisecnce suspended")
    }
}
license_checker(135)
        