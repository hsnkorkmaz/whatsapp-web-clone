import React from 'react'
import introImage from '../assets/images/intro-connection-dark.jpg';

const Intro = () => {
    return (
        <div className="w-9/12 bg-whatsApp-base flex items-center justify-center border-b-4 border-green-900 ">
        <div className="flex flex-col justify-center items-center w-8/12 text-center">
            <img src={introImage} alt="intro" className="" />
            <h1 className="text-gray-300 text-4xl mt-7">Keep your phone connected</h1>
            <div className="text-gray-300 text-sm mt-5">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</div>
            <div className="w-full h-px bg-whatsApp-light mt-7"></div>
            <div className="text-gray-300 text-sm mt-5 flex items-center justify-center">
                <span>
                    <svg viewBox="0 0 21 18" width="21" height="18"><path fill="currentColor" d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"></path>
                    </svg>
                </span>
                <span>Make calls from desktop with WhatsApp for Windows. <a href="https://www.whatsapp.com/download" rel="noreferrer" target="_blank" className="text-green-600">Get it here</a>.</span>
            </div>
        </div>
    </div>
    )
}

export default Intro
