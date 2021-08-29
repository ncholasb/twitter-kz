const header__class = document.querySelector("header");

/**
 * TO-DO
 * 1st: capture the value of textarea to create the tweet
 * 2nd: build the tweet
 * 3rd: print this tweet
 */

const textarea = document.querySelector("textarea");
const tweet = document.querySelector("button");
const feed = document.querySelector(".mainContent__listTweets");

function catchTweet(event) {
  event.preventDefault();

  const tweetTextarea = textarea.value;
  createTweet(tweetTextarea);
}

tweet.addEventListener("click", catchTweet);

function createTweet(tweetText) {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let ampm = "am";

  if (hour > 12) {
    ampm === "pm";
  } else ampm === "am";

  //object
  const tweet = {
    name: "Name",
    picture: "./assets/img/ProfilePic.png",
    user: " @user",
    text: tweetText,
    time: `${hour}:${minutes} ${ampm}`,
  };

  if (tweetText.length < 1) {
    console.log("Empty tweet!");
  }

  listTemplateTweet(tweet);
}

function listTemplateTweet(tweet) {
  const { name, picture, user, text, time } = tweet;

  // Creating elements to list the template
  let li = document.createElement("li");
  li.classList.add("mainContent__tweet");
  let img = document.createElement("img");
  img.src = picture;
  img.classList.add("tweet__profilePic");

  let div = document.createElement("div");
  div.classList.add("tweet__content");
  let h2 = document.createElement("h2");
  h2.innerText = name;

  let span = document.createElement("span");
  span.innerText = `${user} - ${time}`;

  let p = document.createElement("p");
  p.innerText = text;

  //Adding elements inside the div
  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(p);

  //Adding elements inside the li
  li.appendChild(img);
  li.appendChild(div);

  feed.appendChild(li);
  textarea.value = "";
}
