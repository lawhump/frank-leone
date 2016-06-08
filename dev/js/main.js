var mainPage = document.querySelector('#skrollr-body');
var filmPage = document.querySelector('.films');
var back = document.querySelector('.back');

var resize = function() {
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
    resize();
});

window.onresize = resize;

document.querySelector('.filmLink').addEventListener('click', function() {
  mainPage.classList.remove('active');
  mainPage.classList.add('inactive');
  filmPage.classList.remove('inactive');
  filmPage.classList.add('active');
});

back.addEventListener('click', function() {
  mainPage.classList.remove('inactive');
  mainPage.classList.add('active');
  filmPage.classList.remove('active');
  filmPage.classList.add('inactive');
});
