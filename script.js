window.onload = function(){
    let zodis1 = "ten";
    let zodis2 = "namas";
    let zodis3 = "medinis";
    let Raide1 = Raide(zodis1);
    console.log(Raide1);
    let Raide2 = Raide(zodis2);
    console.log(Raide2);
    let Raide3 = Raide(zodis3);
    console.log(Raide3);
}
function Raide(Raide1){
    return Raide1[((Raide1.length)-1)/2];
}