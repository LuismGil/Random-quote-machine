import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const quotes = [
  {
    quote:
      'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: '- Thomas A. Edison',
  },
  {
    quote: 'You must expect great things of yourself before you can do them.',
    author: '- Michael Jordan',
  },
  {
    quote:
      'Obstacles are necessary for success because in selling, as in all careers of importance, victory comes only after many struggles and countless defeats.',
    author: '- Og Mandino',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: '- Aristotle Onassis',
  },
  {
    quote:
      'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
    author: '- Plato',
  },
  {
    quote: 'The only thing we have to fear is fear itself.',
    author: '- Franklin D. Roosevelt',
  },
  {
    quote:
      'Only put off until tomorrow what you are willing to die having left undone.',
    author: '- Pablo Picasso',
  },
  {
    quote:
      'The greater danger for most of us isn’t that our aim is too high and miss it, but that it is too low and we reach it.',
    author: '- Michelangelo',
  },
  {
    quote: 'A goal properly set is halfway reached.',
    author: '- Zig Ziglar',
  },
  {
    quote:
      'Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.',
    author: '- Pablo Picasso',
  },
];

const colors = [
  '#011627',
  '#f3C677',
  '#2EC4B6',
  '#E71D36',
  '#5C80BC',
  '#CF1259',
  '#8B1E3F',
  '#DB4C4O',
  '#DDDBF1',
  '#F8F991',
];

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    let newQuote = quotes[randomQuote];
    let randomColor = Math.floor(Math.random() * colors.length);

    console.log('click aqui funciona?');
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });
  };

  render() {
    return (
      <div id="quote-box">
        <h1>Random Quote Machine</h1>
        <div className="quote-card">
          <NewQuote quote={this.state} />
          {/* handlerClick={this.handleClick} quote={this.state} */}

          <div>
            <a id="tweet-quote" href="#">
              <i className="fab fa-twitter-square icon" />
            </a>
            <a href="#" role="button">
              <i className="fab fa-tumblr-square icon" />
            </a>
            <a href="#">
              <i className="fab fa-reddit-square icon" />
            </a>
            <button
              id="new-quote"
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.handleClick}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const NewQuote = props => {
  const { quote } = props;

  return (
    <div>
      <p>{quote.quote}</p>
      <p id="author">- {quote.author} </p>
    </div>
  );
};

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
