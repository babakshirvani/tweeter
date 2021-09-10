/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


  //check if the tweet is valid , if not display error.
  const validateForm = (text) => {
    const $error = $('.error')
    if (!text.length) {
      $error.slideDown(500);
      $error.html('<i class="fas fa-exclamation-triangle"></i>    Don\'t try to submit an empty tweet.    <i class="fas fa-exclamation-triangle"></i>');
      return false;
    }
    if (text.length > 140) {
      $error.slideDown(500);
      $error.html('<i class="fas fa-exclamation-triangle"></i>    Your tweet is too long, limit is 140 characters.     <i class="fas fa-exclamation-triangle"></i>');
      return false;
    }
    $error.slideUp(500);
    return true;

  }

  // remder the tweets
  const renderTweets = (tweets) => {
    const $TweetContainer = $('#tweet-container');
    $TweetContainer.empty();
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $(`#tweet-container`).prepend($tweet);
    }
  };

  // *** create a new tweet **
  const createTweetElement = (tweet) => {
    const { avatars, name, handle } = tweet.user;
    const { text } = tweet.content;
    const timeStamp = tweet.created_at;
    const $header = `<header>
    <div class="user-detail" >
      <img class="avatar" src="${avatars}">
      <div class="user-info">
        <span>${name}</span>
      </div>
    </div>
    <small class="user-handle">${handle}</small>
  </header>`;

    const $footer = `<footer>
  <div class="tweet-footer">
    <small class="date"> ${timeago.format(timeStamp)}</small>
    <span class="reaction">
      <i class="fas fa-heart"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-flag"></i>
    </span>
</div>
</footer>`;
    const $tweetBody = $('<div>').addClass('tweet-body')
    const $tweetText = $('<span>').text(text);
    const $artile = $('<article>').addClass('tweet');

    return $artile.append($header, $tweetBody.append($tweetText), $footer)
  }


  //load the tweets from the server
  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET', })
      .then(renderTweets);
  };

  loadTweets();


  // depends on the validation form result, submit the new tweet.
  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log("The form has been submitted!!");

    const enteredText = $(this).children('textarea').val()
    console.log("enteredText: (length):", enteredText.length)

    if (validateForm(enteredText)) {
      console.log("The form has been submitted!! - successfully ");

      const serializedData = $(this).serialize();
      $.post('/tweets', serializedData)
        .then(loadTweets)
        .then($(this).children('textarea').val(""))
        .then($('.counter').val(140));
    }
  });

})