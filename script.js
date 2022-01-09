function calculate(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
    var p=document.forms["myForm"]["Percentage Required"].value/100;
    var cur = (c/t) *100;
    cur = Math.round(cur*100)/100;
    if(p==0){
        document.getElementById("result").innerHTML=`You currently have ${cur}% attendence`;    
    }
    else if((c/t)>p){
        document.getElementById("result").innerHTML=`You alredy have more than ${p*100}% attendence`;
    }
    else{
        var res=(p*t - c)/(1-p)
        res = Math.ceil(res);
        document.getElementById("result").innerHTML=`You currently have ${cur}% attendence.<br>You need ${res} more hour class for ${p*100}% attendence`;
        return false;
    }
}