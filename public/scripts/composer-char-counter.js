
$(document).ready(function() {

  const validateForm = (text) => {
    if (!text.length) {
      alert("Dont try to send an empty tweet");
      return false;
    }
    if (text.length > 140) {
      alert("Sorry the limit is 140 characters.");
      return false
    }

    return true;

  }


  $('.new-tweet textarea').on('input', function() {
    const textLength = $(this).val().length;
    const count = $(this).parent().children('div').children(".counter");
    count.text(140 - textLength);
    140 - textLength < 0 ? count.css('color', 'red') : count.css('color', '');
  });


  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log("The form has been submitted!!");

    const enteredText = $(this).children('textarea').val()

    console.log("enteredText: (length):", enteredText.length)
    if (validateForm(enteredText)) {
      console.log("The form has been submitted!! - successfully ");
      const serializedData = $(this).serialize();
      $.post('/tweets', serializedData, (response) => {
        console.log("response:", response);

      })
    }
  });

});

