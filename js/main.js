$(window).resize(function(){
    var width = $(window).width();

    if(width <= 420){
        // split email
        $(".four a h3").html("LEONEMUSICAL @GMAIL.COM");
    }
    else{
        // make email one line
        $(".four a h3").html("LEONEMUSICAL@GMAIL.COM");
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
    // $('div.header').fadeIn(2500).removeClass('hidden');
    // $('div.links').delay(2200).fadeIn(800).removeClass('hidden');
    // $('div.enterwild').delay(3400).fadeIn(800).removeClass('hidden');

    initGrid();
});