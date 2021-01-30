import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const QuoteBox = () => {
  return (
    <div id="quote-box">
      <NewQuote />
    </div>
  );
};

const NewQuote = () => {
  const initialState = {
    quotes: [
      {
        quote:
          'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas A. Edison',
      },
      {
        quote:
          'You must expect great things of yourself before you can do them.',
        author: 'Michael Jordan',
      },
      {
        quote:
          'Obstacles are necessary for success because in selling, as in all careers of importance, victory comes only after many struggles and countless defeats.',
        author: 'Og Mandino',
      },
      {
        quote:
          'It is during our darkest moments that we must focus to see the light.',
        author: 'Aristotle Onassis',
      },
      {
        quote:
          'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
        author: 'Plato',
      },
      {
        quote: 'The only thing we have to fear is fear itself.',
        author: 'Franklin D. Roosevelt',
      },
      {
        quote:
          'Only put off until tomorrow what you are willing to die having left undone.',
        author: 'Pablo Picasso',
      },
      {
        quote:
          'The greater danger for most of us isn’t that our aim is too high and miss it, but that it is too low and we reach it.',
        author: 'Michelangelo',
      },
      {
        quote: 'A goal properly set is halfway reached.',
        author: 'Zig Ziglar',
      },
      {
        quote:
          'Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.',
        author: 'Pablo Picasso',
      },
    ],
  };

  const [quoteState, setQuoteState] = useState(initialState);
  const quotes = initialState.quotes;

  const randomQuotes = Math.floor(Math.random() * quotes.length);

  const switchQuoteHandler = () => {
    console.log('click aqui funciona?');
    setQuoteState(quotes[randomQuotes]);
  };

  return (
    <div>
      <blockquote id="text">{quotes[0].quote}</blockquote>
      <p id="author"> – {quotes[0].author}</p>
      <div>
        <a id="tweet-quote" href="#">
          <i className="fab fa-twitter-square icon"></i>
        </a>
        <a href="#" role="button">
          <i className="fab fa-tumblr-square icon"></i>
        </a>
        <a href="#">
          <i className="fab fa-reddit-square icon"></i>
        </a>
        <button
          id="new-quote"
          type="button"
          className="btn btn-primary btn-lg"
          onClick={switchQuoteHandler()}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
