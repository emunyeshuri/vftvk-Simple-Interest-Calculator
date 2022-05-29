function compute()
{
    var principal = document.getElementById("principal");
    if(principal.value <= 0)
    {
        alert("Enter a positive number")
    
    }


    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    
    document.getElementById("result").innerHTML = "If you deposit:" + principal.value  + 
        "at an interest rate of :" + rate + "%\.\<br\>You will receive an amount of:<br>" + 
        interest + "in the year <br>" + year ;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
