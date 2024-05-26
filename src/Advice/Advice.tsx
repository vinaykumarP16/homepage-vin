import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import './styles.scss';

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
        <div className="advice">
            <p>{advice}</p>
            <IconButton onClick={fetchAdvice} style={{ color: 'green' }} size="medium">
                <IoMdRefreshCircle />
            </IconButton>
        </div>
    )
}

export default Advice;