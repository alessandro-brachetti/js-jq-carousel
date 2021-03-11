$(document).ready(function() {

slider();

});

//FUNCTIONS
function slider() {

  var carouselNext = $('.next')
  var carouselPrev = $('.prev')
  var currentImg = $('.active')
  var nextImg = currentImg.next();
  var prevImg = currentImg.prev();


  carouselNext.click(function () {
    if (currentImg.hasClass('active')) {
      currentImg.removeClass('active');
      nextImg.addClass('active');
    }
  });

  carouselPrev.click(function () {
    if (currentImg.hasClass('active')) {
      currentImg.removeClass('active');
      prevImg.addClass('active');
    }
  });

}
