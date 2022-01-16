
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyA67ON6yISRPHynNACqejaNz1cRP0wjib0",
    authDomain: "cipherguys.firebaseapp.com",
    databaseURL: "https://cipherguys-default-rtdb.firebaseio.com",
    projectId: "cipherguys",
    storageBucket: "cipherguys.appspot.com",
    messagingSenderId: "807928981999",
    appId: "1:807928981999:web:0c4519105736a80ac5ee1a",
    measurementId: "G-RCE709EHL2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  function save(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
      set(ref(db,"hi/"+c),{
          current : c,
          tot : t
      });
  }

function calculate(){
    var c=document.forms["myForm"]["attendence"].value;
    var t=document.forms["myForm"]["Total"].value;
    var p=document.forms["myForm"]["Percentage Required"].value;
    save();
    var cur = (c/t) *100;
    cur = Math.round(cur*100)/100;
    if(t==0){
        document.getElementById("result").innerHTML=`Velachill edukaruthe keto`;
    }
    else if(cur>100){
        document.getElementById("result").innerHTML=`${cur}% attendance 🙄 <br> Nee iluminanti aano? `;
    }
    else if((p==100 && (cur)!=100) || p>100){
        document.getElementById("result").innerHTML=`${p}% onnum kitilla <br>Nee nadakana karyam vellom para`;
    }
    else if(p==0){
        document.getElementById("result").innerHTML=`You currently have ${cur}% attendence`;    
    }
    else if((cur)==p){
        document.getElementById("result").innerHTML=`You already have ${p}% attendence`;
    }
    else if((cur)>p){
        document.getElementById("result").innerHTML=`You already have more than ${p}% attendence`;
    }
    else{
        var res=((p/100)*t - c)/(1-(p/100))
        res = Math.ceil(res);
        if (isNaN(res)) res = 0;
        document.getElementById("result").innerHTML=`You currently have ${cur}% attendence.<br>You need ${res} more hour class for ${p}% attendence`;
    }
    return false;
}

var cal = document.getElementById("Calc");
cal.addEventListener("click",calculate);