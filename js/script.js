$(document).ready(function() {
    
    var getProductHeight = $('.project.active').height();


  
    $('.portfolio').css({
      height: getProductHeight
    });

    function calcProductHeight() {
      getProductHeight = $('.project.active').height();
  
      $('.portfolio').css({
        height: getProductHeight
      });
    }

    var projectItem = $('.project'),
    projectCurrentItem = projectItem.filter('.active');


  $('#next').on('click', function(e) {
    e.preventDefault();

    var nextItem = projectCurrentItem.next();

    console.log(nextItem);

    projectCurrentItem.removeClass('active');

    console.log(projectCurrentItem);

    if (nextItem.length) {
      console.log(nextItem.length);
      projectCurrentItem = nextItem.addClass('active');
    } else {
      projectCurrentItem = projectItem.first().addClass('active');
    }
      calcProductHeight();
  });

  $('#prev').on('click', function(e) {
    e.preventDefault();

    var prevItem = projectCurrentItem.prev();

    projectCurrentItem.removeClass('active');

    if (prevItem.length) {
      projectCurrentItem = prevItem.addClass('active');
    } else {
      projectCurrentItem = projectItem.last().addClass('active');
    }

    calcProductHeight();
  });
});

