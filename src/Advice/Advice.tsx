import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";

const Advice = () => {
    const [advice, setAdvice] = useState('');
    const fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
        } catch (err) {
            console.error('advice',err)
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
        }}>
            <p>{advice}</p>
            <IconButton onClick={fetchAdvice} style={{ color: 'green' }} size="medium">
                <IoMdRefreshCircle />
            </IconButton>
        </div>
    )
}

export default Advice;