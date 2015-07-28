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