function calculate(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
    var p=document.forms["myForm"]["Percentage Required"].value;
    var cur = (c/t) *100;
    cur = Math.round(cur*100)/100;
    if(t==0){
        document.getElementById("result").innerHTML=`Vilachill edukaruthe keto`;
    }
    else if(c>t){
        document.getElementById("result").innerHTML=`${cur}% attendance 🙄 <br> Nee iluminanti aano? `;
    }
    else if(p==1 && (cur)!=1){
        document.getElementById("result").innerHTML=`100% onnum kitilla <br>Nee nadakan karyam vellom para`;
    }
    else if(p==0){
        document.getElementById("result").innerHTML=`You currently have ${cur}% attendence`;    
    }
    else if((cur)>=p){
        document.getElementById("result").innerHTML=`You alredy have ${p}% attendence`;
    }
    else if((cur)>p){
        document.getElementById("result").innerHTML=`You alredy have more than ${p}% attendence`;
    }
    else{
        var res=((p/100)*t - c)/(1-(p/100))
        res = Math.ceil(res);
        if (isNaN(res)) res = 0;
        document.getElementById("result").innerHTML=`You currently have ${cur}% attendence.<br>You need ${res} more hour class for ${p}% attendence`;
    }
    return false;
}