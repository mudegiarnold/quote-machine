import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

      const fetchQuote = async () => {
          const response = await axios.get('https://api.quotable.io/random');
              setQuote(response.data.content);
                  setAuthor(response.data.author);
                    };

                      useEffect(() => {
                          fetchQuote();
                            }, []);

                              return (
                                  <div className="App">
                                        <div id="quote-box">
                                                <p id="text">{quote}</p>
                                                        <p id="author">{author}</p>
                                                                <button id="new-quote" onClick={fetchQuote}>New Quote</button>
                                                                        <a
                                                                                  id="tweet-quote"
                                                                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}`}
                                                                                                      target="_blank"
                                                                                                                rel="noopener noreferrer"
                                                                                                                        >
                                                                                                                                  Tweet
                                                                                                                                          </a>
                                                                                                                                                </div>
                                                                                                                                                    </div>
                                                                                                                                                      );
                                                                                                                                                      };

                                                                                                                                                      export default App;
                                                                                                                                                      