let data, randomIndex, quote, author;

const quoteDiv = document.querySelector('.quote');
const authorDiv = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.newQuoteBtn');
const twitterBtn = document.querySelector('.twitterBtn');

const appendQuote = (data) => {
  quote = data.text;
  author = data.author;
  quoteDiv.innerHTML = `${data.text}`;
  authorDiv.innerHTML = `${data.author}`;
};

const getQuote = (length) => {
  randomIndex = Math.floor(Math.random() * length);
  appendQuote(data[randomIndex]);
};

const fetchQuote = async () => {
  const url = `https://type.fit/api/quotes`;
  const res = await fetch(url);
  data = await res.json();
  getQuote(data.length);
};

fetchQuote();

const tweet = () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote}`;
  window.open(tweetUrl);
};

newQuoteBtn.addEventListener('click', () => {
  getQuote(data.length);
});

twitterBtn.addEventListener('click', () => {
  tweet();
});
