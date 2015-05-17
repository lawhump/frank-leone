$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width <= 768){
       $('#tellem').removeClass('vis').addClass('invis');
   }
   else{
       $('#tellem').removeClass('invis').addClass('vis');
   }
})
.resize();

$(document).ready(function () {
    $('div.header').fadeIn(2500).removeClass('hidden');
    $('div.links').delay(2200).fadeIn(800).removeClass('hidden');
    $('div.enterwild').delay(3400).fadeIn(800).removeClass('hidden');
});