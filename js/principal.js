
window.onload = function () {
    var button_1= document.getElementById("butt");
    button_1.onclick= interval;

    var change_1= document.getElementById("change");
  
    change_1.onchange=chengeColor;
  
  }
  
  
  
  function increaseFontSize(){
    let txt = document.getElementById("textArea");
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + 'px';
  }
  
  function interval() {
    var id = setInterval(increaseFontSize, 1000);
    setTimeout(clearInterval, 5000, id);
  }
  
  function chengeColor() {
    if(document.getElementById("change").checked){
      document.getElementById("textArea").style.fontWeight="bold";
      document.getElementById("textArea").style.color="green";
      document.getElementById("textArea").style.textDecoration="underline";
      //document.body.style.backgroundColor= "lightyellow";
      document.body.style.backgroundImage = "linear-gradient(red, yellow)";
    }
    else{
      document.getElementById("textArea").style.fontWeight="normal";
      document.getElementById("textArea").style.color="black";
      document.getElementById("textArea").style.textDecoration="none";
      document.body.style.backgroundColor= "white";
  
    }
  
  }
  


  

  
  
  