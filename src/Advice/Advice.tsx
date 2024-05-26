import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";

const Advice = () => {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch advice');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <>
            <p>{advice}</p>
            <button onClick={fetchAdvice}>Get New Advice</button>
            <IconButton style={{ color: 'green' }} size="medium">
                <IoMdRefreshCircle />
            </IconButton>
        </>
    )
}

export default Advice;