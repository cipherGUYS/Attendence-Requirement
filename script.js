function calculate(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
    var p=document.forms["myForm"]["Percentage Required"].value/100;
    var res=(p*t - c)/(1-p)
    document.getElementById("result").innerText="You need ${res} more hrs for ${p*100}% attendence";
    console.log("You need ${res} more hrs for ${p*100}% attendence")
    setTimeout(returntrue, 1000);
}