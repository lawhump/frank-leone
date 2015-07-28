window.onresize = function() {
    var width = window.innerWidth;

    if(width <= 420){
        // split email
        document.querySelector(".four a h3").innerHTML("LEONEMUSICAL @GMAIL.COM");
    }
    else{
        // make email one line
        document.querySelector(".four a h3").innerHTML("LEONEMUSICAL@GMAIL.COM");
    }
};

function initGrid() {
    imagesLoaded('.grid', function() {
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
            // options
            itemSelector: '.grid-item',
            isFitWidth: true,
            columnWidth: '.grid-sizer',
            gutter: 10
        });
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    initGrid();
});