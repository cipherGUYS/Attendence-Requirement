function calculate(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
    var p=document.forms["myForm"]["Percentage Required"].value/100;
    if((c/t)>p){
        document.getElementById("result").innerHTML=`You alredy have ${p*100}% attendence`;
    }
    else{
        var res=(p*t - c)/(1-p)
        res = Math.ceil(res);
        document.getElementById("result").innerHTML=`You need ${res} more hours class for ${p*100}% attendence`;
        return false;
    }
}