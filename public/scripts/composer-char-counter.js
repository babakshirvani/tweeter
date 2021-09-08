
$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    const textLength = $(this).val().length;
    const count = $(this).parent().children('div').children(".counter");
    count.text(140 - textLength);
    140 - textLength < 0 ? count.css('color', 'red') : count.css('color', '');
  });


  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log("The form has been submitted!!");

    const serializedData = $(this).serialize();
    console.log("serializedData:", serializedData);

    $.post('/tweets', serializedData, (response) => {
      console.log("response:", response);

    })

  });

});

