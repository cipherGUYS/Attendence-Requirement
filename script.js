function calculate(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
    var p=document.forms["myForm"]["Percentage Required"].value/100;
    if(p==0){
        p= (c/t) *100;
        p=Math.round(p*100)/100;
        document.getElementById("result").innerHTML=`You alredy have ${p}% attendence`;    
    }
    else if((c/t)>p){
        document.getElementById("result").innerHTML=`You alredy have ${p*100}% attendence`;
    }
    else{
        var res=(p*t - c)/(1-p)
        res = Math.ceil(res);
        document.getElementById("result").innerText=`You need ${res} more hour class for ${p*100}% attendence`;
        return false;
    }
}