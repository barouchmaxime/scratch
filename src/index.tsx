// IMPORTS
// =============================================
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WavePng from './assets/wave.png';
import CloudSvg from './assets/cloud.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Components
import Congrats from './components/Congrats';
// MAIN RENDER
// =============================================
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <div className="m-8 p-8 bg-white rounded" >
            <h1 className="text-2xl text-gray-600"><span className="w-8 h-8 block"><img className="w-full" src={WavePng} /></span>Hello, now what?</h1>
            <p className="text-gray-400 mb-4 flex"><span className="w-4 h-6 mr-1 flex justify-center items-center"><img className="w-full opacity-20" src={CloudSvg} /></span>Running on port: {window.location.port || 80}</p>
            <Routes>
                <Route path="/" element={
                    <div>
                        <div id="mountain" className="bg-gray-100 w-full h-48 block rounded mr-8 mb-4"></div>
                        <Link className="h-10 flex justify-center items-center text-gray-500 rounded border border-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300 ease-in-out" to="/congrats">Next</Link>
                    </div >
                } />
                <Route path="/congrats" element={
                    <Congrats />
                } />

            </Routes >
        </div >
    </BrowserRouter >
);
