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

    if(width <= 650){
        // split email
        $(".four a h4").html("LEONEMUSICAL @GMAIL.COM");
    }
    else{
        // make email one line
        $(".four a h4").html("LEONEMUSICAL@GMAIL.COM");
    }
})
.resize();

function initGrid() {
    imagesLoaded('.grid', function() {
        // init Masonry
        var $grid = $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            isFitWidth: true,
            columnWidth: '.grid-sizer',
            gutter: 10
        });

        // $grid.on( 'click', '.grid-item', function() {
        //     // change size of item via class
        //     $( this ).toggleClass('grid-item--');
        //     // trigger layout
        //     $grid.masonry();
        // });
    });
}

$(document).ready(function () {
    $('div.header').fadeIn(2500).removeClass('hidden');
    $('div.links').delay(2200).fadeIn(800).removeClass('hidden');
    $('div.enterwild').delay(3400).fadeIn(800).removeClass('hidden');

    initGrid();
});