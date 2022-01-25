$(document).ready(function () {

 var p = $("p").text();
 var tamanho = p.length + 1 ;
 console.log(tamanho);
 var texto = p.substr(0,tamanho) + "" + "YES";

 $("p").text(texto);


}) 

