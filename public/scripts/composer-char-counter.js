
$(document).ready(function() {

  $('.new-tweet textarea').on('input', function() {
    const textLength = $(this).val().length;
    const count = $(this).parent().children('div').children(".counter");
    count.text(140 - textLength);
    140 - textLength < 0 ? count.css('color', 'red') : count.css('color', '');
  });

});

