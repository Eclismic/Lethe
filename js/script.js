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

  $('#contact-form').on('submit', function(event) {
    event.preventDefault(); // prevent reload

    const message = document.querySelector("textarea").value;
    const naam = document.querySelector("input[name='naam'").value;
    const onderwerp = document.querySelector("input[name='onderwerp'").value;


    
    console.log(onderwerp);



   var data = {
    service_id: 'gmail',
    template_id: 'template_FWsMu9Vo',
    user_id: 'user_NLpRcuoPFiAcI81sxdIwx',
    template_params: {
        'from_name': naam,
        'message_html': message,
        'onderwerp': onderwerp
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Uw mail is verstuurd!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
});

});

