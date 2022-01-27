$(document).ready(function() {

	const rows_columns = 4;
	var axle_x = 3;
	var axle_y = 3;
	start();
    shuf();

    function shuf(){
        $("#shufflebutton").on('click',shufflePuzzle);
    }
	

   function start() {
	  var count = 1;
	  for (var i = 0; i < rows_columns; i++) {
		for (var j = 0; j < rows_columns; j++) {
		
		  let content=count++;
		  var principal = document.createElement("div");
		  principal.classList.add("puzzlepiece");
		  principal.style.left = 100 * j + "px";
		  principal.style.top = 100 * i + "px"; 
		  principal.style.backgroundPosition = (0 - 100 * j) + "px" + " " + (0 - 100 * i) + "px";
		  principal.setAttribute("id", "peice_" + j + "_" + i);
		  principal.innerHTML = content;
		  principal.onmouseover = highlight;
		  principal.onmouseout = unhighlight;
		  principal.onclick = peiceClick;
		  if (i != 3 || j != 3) { 
			document.getElementById("puzzlearea").appendChild(principal);
		  }
		}
	  }
	}
  

  
	// on mouse event callback
	function highlight() {
	  if (checkMove(this)) {
		this.classList.add("movablepiece");
	  }
	}
  
	// on mouseleave event callback
	function unhighlight() {
	  if (checkMove(this)) {
		this.classList.remove("movablepiece");
	  }
	}
  
	// Peice click event handler
	function peiceClick(){
	  movePeice(this);
	}
  
   	//next move is empty space 
	function checkMove(principal) { 
        var neighbors = findNeighbors();
        if (neighbors.indexOf(principal.getAttribute("id")) != -1) {
          return true;
        } else {
          return false;
        }
      }

	// Swaps the selected peice
	function movePeice(principal) {
	  var tempEX = axle_x;
	  var tempEY = axle_y;
	  if (checkMove(principal)) {
		axle_x = parseInt(principal.style.left) / 100; 
		axle_y = parseInt(principal.style.top) / 100;
		principal.style.top = 100 * tempEY + "px";
		principal.style.left = 100 * tempEX + "px";
		principal.setAttribute("id", "peice_" + tempEX + "_" + tempEY);
	  }
	}
  
	// Shuffles the peices randomly  
	function shufflePuzzle() {   
	  for (var i = 0; i < 1000; i++) {
		var neighbors = findNeighbors();
		var rand = parseInt(Math.random() * neighbors.length);
		var principal = document.getElementById(neighbors[rand]);
		movePeice(principal);
	  }
	}
  
	// Checks peice around selected principal to see if they're empty 
	function findNeighbors() {
	  var up = "peice_" + axle_x + "_" + (axle_y - 1);
	  var down = "peice_" + axle_x + "_" + (axle_y + 1);
	  var left = "peice_" + (axle_x - 1) + "_" + axle_y;
	  var right = "peice_" + (axle_x + 1) + "_" + axle_y;
  
	  var peice = [up, down, left, right];
	  var realpeice = [];
  
	  for (var i = 0; i < peice.length; i++) {
		if (document.getElementById(peice[i]) != null) {
		  realpeice.push(peice[i]);
		}
	  }
	  return realpeice;
	}
  
  }
  );
  