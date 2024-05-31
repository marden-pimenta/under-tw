// ==UserScript==
// @name        Cunhar Latinos
// @namespace    https://www.facebook.com/Julimar.santos.martins
// @version      0.1
// @description  Cunhar Moeda Rodar Tamper
// @author       JulimarSantos
// @include      https://br*screen=snob*
// @match        https://br*screen=snob*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js
// ==/UserScript==
$(function(){
   var tempoSegundo = 60
   $('#coin_mint_count').val($("#coin_mint_fill_max").text().replace(')','').replace('(',''));
   $(".btn-default").click();
   setInterval(function () {
       window.location.reload();
   }, tempoSegundo*1000);
});