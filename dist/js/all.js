window.onresize = function() {
    var width = window.innerWidth;

    if(width <= 420){
        // split email
        document.querySelector(".four a h3").innerHTML="LEONEMUSICAL @GMAIL.COM";
    }
    else{
        // make email one line
        document.querySelector(".four a h3").innerHTML="LEONEMUSICAL@GMAIL.COM";
    }
};

function initGrid() {
    imagesLoaded('.grid', function() {
        var elem = document.getElementsByClassName('.grid');
        var msnry = new Masonry( elem, {
            itemSelector: '.grid-item',
            isFitWidth: true,
            columnWidth: '.grid-sizer',
            gutter: 10
        });
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    initGrid();
    window.onload = function() {
        var s = skrollr.init({forceHeight: false}, {smoothScrolling:true});
    };
});
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var container = imagesLoaded('.three');

function getParent(el) {
    var p = el.parentNode;

    while (!p.className.includes('grid-item')) {
        p = p.parentNode;
    }
    return p;
}

container.on( 'always', function( instance ) {
    // console.log('all images loaded');
});
container.on( 'done', function( instance ) {
    // console.log('all images successfully loaded');
});
container.on( 'fail', function() {
    // console.log('all images loaded, at least one is broken');
});
container.on( 'progress', function( instance, image ) {
  var result = image.isLoaded ? 'loaded' : 'broken';
  // console.log( 'image is ' + result + ' for ' + image.img.src );

  var item = getParent( image.img );
  item.classList.remove('is-loading');

});