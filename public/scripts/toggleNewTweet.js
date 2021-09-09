$(() => {

  const arrowButton = $('.fa-angle-double-down');
  arrowButton.on('click', () => {
    const newTweetArea = $('.new-tweet');
    if (newTweetArea.css('display') === 'none') {
      newTweetArea.slideDown(800);
      $('textarea').focus();
    } else newTweetArea.slideUp(800);
  });

});

