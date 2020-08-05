$(document).ready(function() {
    var getProductHeight = $('.project.active').height();

    console.log(getProductHeight);
  
    $('.portfolio').css({
      height: getProductHeight
    });
});