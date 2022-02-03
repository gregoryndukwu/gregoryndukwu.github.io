$('document').ready(function () {
     
     $('#submit').click(function(){
          $(".result").empty();
         var value = $('.value').val(); // Get the value that user type keyboard
         $.get("http://localhost:3000/find?word=" + value, function (data, err){
            // console.log(data.result[0].word);  
            //console.log(data);   
            var size = data.result.length;
            var newLine = "";
            
            if(size < 1) {
               $(".result").append("<p> your search return 0 </p>");
            }else{

            for(let i = 0; i < size; i++){
                
                 console.log(data.result[i].word + data.result[i].wordtype + data.result[i].definition );

               newLine = "<p>" 
                          + i 
                          + "(" 
                          + data.result[i].wordtype 
                          + ")"
                          +"::"
                          + data.result[i].definition
                          + "<br />";
                          $(".result").append(newLine);             

            }
          }
            
            console.log(size);     
             
         })
     });
     

     });