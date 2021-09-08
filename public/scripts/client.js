/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  const renderTweets = (tweets) => {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $(`#tweet-container`).append($tweet);
    }
  };


  const createTweetElement = (tweet) => {

    let $tweet = $(`<article class= "tweet">
    <header>
      <div class="user-detail" >
        <img class="avatar" src="${tweet.user.avatars}">
        <div class="user-info">
          <span>${tweet.user.name}</span>
        </div>
      </div>
      <small class="user-handle">${tweet.user.handle}</small>
    </header>
    <div class="tweet-body">
      <span >${tweet.content.text}</span>
    </div>  
    <footer>
      <div class="tweet-footer">
        <small class="date"> ${timeago.format(tweet.created_at)}</small>
        <span class="reaction">
          <i class="fas fa-heart"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-flag"></i>
        </span>
    </div>
    </footer>
  </article>`);
    return $tweet;
  }



  const loadTweets = (tweet) => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      succss: (tweet) => {
        renderTweets(tweet);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      }
    });
  };
  loadTweets();
})