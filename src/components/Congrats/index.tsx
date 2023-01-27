// IMPORTS
// =============================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import CongratsGif from '../../assets/congrats.gif';
import ReloadIcon from '../ReloadIcon';

// COMPONENT
// =============================================
const Congrats = () => {
    const [input, setInput] = useState('');
    const onClickReload = () => {
        window.location.reload();
    }
    return <div>
        <label htmlFor="secret" className="text-gray-500 text-xs mb-2 block">Enter "congrats" below</label>
        <input id="secret" autoComplete="off" className="h-10 mb-4 px-2 rounded border border-gray-300 transition-colors duration-300 ease-in-out" placeholder="Secret word" type="text" value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
        {input === "congrats" ? <img className="rounded mb-4" src={CongratsGif} /> : null}
        <Link className="h-10 mb-4 flex justify-center items-center text-gray-500 rounded border border-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300 ease-in-out" to="/">Back</Link>
        <a onClick={onClickReload} className="h-10 mb-4 flex justify-center items-center text-gray-500 rounded border border-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300 ease-in-out" href="#reload">
            <span className="flex justify-center items-center w-3 h-10 mr-1">
                <ReloadIcon />
            </span>
            Reload Page8</a>
    </div>
}

// EXPORTS
// =============================================
export default Congrats;
