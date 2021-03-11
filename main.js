$(document).ready(function() {

slider();

});

//FUNCTIONS
function slider() {

  var carouselNext = $('.next')
  var carouselPrev = $('.prev')

  carouselNext.click(function () {
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if (currentImg.hasClass('active')) {
      currentImg.removeClass('active');
      nextImg.addClass('active');
    }
    var first = $('.first');
    var last = $('.last');

    if (currentImg.hasClass('last')) {
    currentImg.removeClass('active');
    first.addClass('active');
    }

  });

  carouselPrev.click(function () {
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if (currentImg.hasClass('active')) {
      currentImg.removeClass('active');
      prevImg.addClass('active');
    }
    var first = $('.first');
    var last = $('.last');

    if (currentImg.hasClass('first')) {
    currentImg.removeClass('active');
    last.addClass('active');
    }
  });

}
