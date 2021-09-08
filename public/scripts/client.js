/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
const createTweetElement = function(tweetData) {


  // const $tweet = $(`<article>`).addClass(`tweet`)

  const $tweet = $(`<article class= "tweet">
    <header>
      <div class="user-detail" >
        <img class="avatar" src="${tweetData.user.avatars}">
        <div class="user-info">
          <span>${tweetData.user.name}</span>
        </div>
      </div>
      <small class="user-handle">${tweetData.user.handle}</small>
    </header>
    <div class="tweet-body">
      <span >${tweetData.content.text}</span>
    </div>  
    <footer>
      <div class="tweet-footer">
        <small class="date"> ${tweetData.created_at}</small>
        <span class="reaction">
          <i class="fas fa-heart"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-flag"></i>
        </span>
    </div>
    </footer>
  </article>`);
  return $tweet
}

const $tweet = createTweetElement(tweetData);

$(document).ready(function() {
  $('#tweet-container').append($tweet);

})