window.onload = function (){
    var ani_exercise = ANIMATIONS["exercise"];
    let animation = [];
    let speed = 250;

    document.getElementById("size").onchange = increaseSize;
    document.getElementById("game").onchange = addText;
    document.getElementById("turbo").onchange = changeSpeed;
        

    function addText() {
    
    let value = document.getElementById("game").value;
         
    switch (value){
        case 'blank':
            document.getElementById("textArea").innerHTML = "";
        break;

        case 'exercise':
        document.getElementById("textArea").innerHTML = ANIMATIONS["exercise"];
        code = "exercise";
        animation = ANIMATIONS[code].split("=====\n");
        document.getElementById("start").onclick = function() {
            startAnimationBtn(code);
        }

        document.getElementById("stop").onclick = function() {
            stopAnimation();
        }
        
        break;

        case 'juggler':
        document.getElementById("textArea").innerHTML = ANIMATIONS["juggler"];
        code = "juggler";
        animation = ANIMATIONS[code].split("=====\n");

        document.getElementById("start").onclick = function() {
            startAnimationBtn(code);
        }

        document.getElementById("stop").onclick = function() {
            stopAnimation();
        }
        
        break;

        case 'bike':
        document.getElementById("textArea").innerHTML = ANIMATIONS["bike"];
        code = "bike";
        animation = ANIMATIONS[code].split("=====\n");

        document.getElementById("start").onclick = function() {
            startAnimationBtn(code);
        }

        document.getElementById("stop").onclick = function() {
            stopAnimation();
        }
        
        break;

        case 'dive':
        document.getElementById("textArea").innerHTML = ANIMATIONS["dive"];
        code = "dive";
        animation = ANIMATIONS[code].split("=====\n");

        document.getElementById("start").onclick = function() {
            startAnimationBtn(code);
        }

        document.getElementById("stop").onclick = function() {
            stopAnimation();
        }
        
        break;

        case 'custom':
        document.getElementById("textArea").innerHTML = "";
        break;
    } 
    
}

 function increaseSize(){
    size = this.value;
    textArea = document.getElementById("textArea");
    textArea.style.fontSize = parseInt(size) + 'pt';
 }

 function startAnimationBtn(code) {
 
      const textArea = document.getElementById("textArea");
     
     let i =0;
     intervals = setInterval(function () {
        if (i < animation.length){
            textArea.textContent = animation[i];
        }else{
            i=0;
            textArea.textContent = animation[i];
        }
        i++;
    },speed);
       
 } 

 function changeSpeed(){
    if (this.checked === true){
        clearInterval(intervals);
        speed = 50;
        startAnimationBtn(); 
    }else{
        clearInterval(intervals);
        speed = 250;
        startAnimationBtn(); 
    }
 }

 function stopAnimation() {
    
    clearInterval(intervals);
}

 }




/*
 "blank"
"exercise"
"juggler"
"bike"
 "dive"
 "custom" */