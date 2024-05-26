import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import { IoMdRefreshCircle } from 'react-icons/io';

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState<any>({});

    const fetchQuotes = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuotes(response.data);
            setCurrentQuote(response.data[Math.floor(Math.random() * response.data.length)]);
        } catch (err) {
            console.error('quote', err);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    const getNewQuote = () => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
        }}>
            <p>{currentQuote?.text} - {currentQuote?.author ? currentQuote.author : 'Unknown'}</p>
            <IconButton onClick={getNewQuote} style={{ color: 'green' }} size="medium">
                <IoMdRefreshCircle />
            </IconButton>
        </div>
    );
};

export default Quote;
