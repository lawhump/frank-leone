$(window).resize(function(){
    var width = $(window).width();
    var holder;
    
    if(width <= 768){
        $('#tellem').removeClass('vis').addClass('invis');
        $('.gallery-wrapper').removeClass('vis').addClass('invis');
        $('.sc-wrapper').removeClass('invis').addClass('vis');
    }
    else{
        $('#tellem').removeClass('invis').addClass('vis');
        $('.gallery wrapper').removeClass('invis').addClass('vis');
        $('.sc-wrapper').removeClass('vis').addClass('invis');
    }

    if(width <= 580){
        // split email
        $("section.four a h3").html("LEONEMUSICAL @GMAIL.COM");
    }
    else{
        // make email one line
        $("section.four a h3").html("LEONEMUSICAL@GMAIL.COM");
    }
})
.resize();

$(document).ready(function () {
    $('div.header').fadeIn(2500).removeClass('hidden');
    $('div.links').delay(2200).fadeIn(800).removeClass('hidden');
    $('div.enterwild').delay(3400).fadeIn(800).removeClass('hidden');
});