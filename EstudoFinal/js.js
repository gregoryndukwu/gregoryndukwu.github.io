$('document').ready(function(){
 $('button').click(DeleteItem);

    function DeleteItem(){
        $(this).parent().remove();
    }

    


})