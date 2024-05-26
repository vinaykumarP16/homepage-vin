import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      setQuotes(response.data);
      setCurrentQuote(response.data[Math.floor(Math.random() * response.data.length)]);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch quotes');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const getNewQuote = () => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{currentQuote?.text}</p>
      <p>- {currentQuote?.author ? currentQuote.author : 'Unknown'}</p>
      <button onClick={getNewQuote}>Get New Quote</button>
    </div>
  );
};

export default Quote;
