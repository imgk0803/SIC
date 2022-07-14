function compute()
{
    var p = document.getElementById("principal").value;
    if(p == ""|| p<= 0){
        alert("please enter a positive value");
        document.getElementById("principal").focus();
        return;
        }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = (p*r*y)/100;
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear())+parseInt(y);
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML ="IF YOU DEPOSITE"+"<span class = 'highlight'>"+p+"</span>"+"<br> At an interest of "+"<span class ='highlight'>"+r+"</span>"+"<br> you will recieve an amount of "+"<span class='highlight'>"+interest+"</span>"+"<br> in the year"+"<span class = 'highlight'>"+yearNow+"</span>";
    
}
function sliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value;
    slider.oninput= function()
    {
      output.innerHTML = "<span id = 'rate_display'>"+this.value+"</span>";
    }
}
        