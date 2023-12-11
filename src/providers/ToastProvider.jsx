"use client";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToastProvider = () => {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={700}
            hideProgressBar={true}
            pauseOnHover />
    )
}
export default ToastProvider