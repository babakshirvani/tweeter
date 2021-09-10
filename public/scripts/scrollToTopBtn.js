$(() => {

  const btn = $('#button');

  //  display the btn to scroll up, depends on, how far user scrolled,
  $(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  //scroll back to the top
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

})