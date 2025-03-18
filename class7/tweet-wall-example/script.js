const API_URL = 'https://fake-twitter-api.glitch.me/';
const container = document.querySelector('.container');

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// Part 1: Get tweets using the endpoint /tweets from the API and display them on the screen
async function getTweets() {
    try {
        const response = await fetch(API_URL + 'tweets');
        if (!response.ok) {
            throw new Error('Something wrong with getting tweets:' + error)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Something wrong with getting tweets:', error);
    }

}

async function getUser(id) {
    try {
        const response = await fetch(API_URL + 'users/' + id);
        if (!response.ok) {
            throw new Error('Something wrong with getting user:' + error)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Something wrong with getting tweets:', error);
    }
}

getTweets()
    .then((data) => {
        data.forEach(tweet => {
            displayTweet(tweet);
        })
    })
    .catch(error => {
        console.error('There was an error: ' + error)
    })

async function displayTweet(tweet) {
    container.innerHTML = '';

    const tweetEl = document.createElement('div');
    tweetEl.classList.add('post-it');

    const contentEl = document.createElement('p');
    contentEl.innerText = tweet.content;
    tweetEl.appendChild(contentEl);

    const user = await getUser(tweet.userId);
    const authorEl = document.createElement('p');
    authorEl.innerText = '@' + user.username;
    tweetEl.appendChild(authorEl);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', async () => {
        await deleteTweet(tweet.id)
        getTweets()
            .then((data) => {
                data.forEach(tweet => {
                    displayTweet(tweet);
                })
            })
            .catch(error => {
                console.error('There was an error: ' + error)
            })
    });
    tweetEl.appendChild(deleteButton);


    tweetEl.style.top = getRandomInt(0, window.innerHeight) + 'px';
    tweetEl.style.left = getRandomInt(0, window.innerWidth) + 'px';

    container.appendChild(tweetEl);
}

// Part 2: Get tweets that only have a specific hashtag using &q=
async function getTweetsByHashtag(hashtag) {
    const url = API_URL + 'tweets' + '?q=' + encodeURIComponent(hashtag);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const hashtagButton = document.querySelector('.hashtag-button');
hashtagButton.addEventListener('click', async () => {
    const tweets = await getTweetsByHashtag('#coding');
    console.log(tweets);
    tweets.forEach(tweet => {
        displayTweet(tweet);
    })
})

// Part 3: Update the GET calls to handle when errors occur from the server.

// Part 4: Add an input and a button that creates a new tweet
const inputEl = document.querySelector('.tweet-input');
const tweetButton = document.querySelector('.create-tweet-button');

tweetButton.addEventListener('click', () => {
    const inputValue = inputEl.value;
    console.log(inputEl.value);
    createTweet(inputValue, 1)
})

async function createTweet(content, userId) {
    const body = {
        content: content,
        userId: userId,
    };
    const response = await fetch(API_URL + 'tweets', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    console.log(response);
}

// Part 5: Add a button to each post-it note that allows you to delete them
async function deleteTweet(tweetId) {
    const response = await fetch(API_URL + 'tweets' + '/' + tweetId, {
        method: "DELETE",
    });
    console.log(response);
}