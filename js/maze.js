$(document).ready(function () {

    var $boundary = $(".boundary");
    var $status = $("#status");
    var $start = $("#start");
    var $end = $("#end");
    var $maze = $("#maze");
    var $check = 0;
    

   

    StartGame();

    function StartGame() {

        $start.on("click", function () {
            
            $boundary.removeClass("youlose");
            $status.text("Game Start");
            checkGame();
            endGame();
               
        })

    }

    function endGame() {

        $end.mouseenter(function () {
            $status.text("Congratulation You Win!!");
           
        })

    }
    
    function checkGame(){
        
        $boundary.mouseenter(function(){
        $boundary.addClass("youlose");
        $(".boundary.example").addClass("youlose");
        //$boundary.css("background-color","#ff8888;");
        $status.text("Sorry, You Lose");
        })

       

    }


})   