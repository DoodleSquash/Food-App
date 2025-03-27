import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const { url } = useContext(StoreContext);
    const navigate = useNavigate(); // Use useNavigate instead of Navigate()

    const verifyPayment = async () => {
        try {
            console.log("API URL:", url);
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            if (response.data.success) {
                navigate("/myorders"); // Navigate to /myorders if successful
            } else {
                navigate("/"); // Navigate to / if not successful
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/"); // Navigate to / in case of an error
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []); // Run verifyPayment on component mount

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;