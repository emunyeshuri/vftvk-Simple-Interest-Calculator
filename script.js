let minval=1;
let maxval=20;
let default_val=10.25;
var principal=document.getElementById("principal").value;
var rate= document.getElementById("rate");
var years=document.getElementById("years");
var interest=principal*years*rate/100;
var year=new Date().getFullYear()+parseInt(years);
function updaterate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
    p = document.getElementById("principal").value;
    
}
        