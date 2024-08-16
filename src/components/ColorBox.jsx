import React, { useState } from 'react';

const ColorBox = ({ color }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div 
            onClick={handleCopy}
            className="w-24 h-24 m-2 rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform duration-300 relative"
            style={{ backgroundColor: color }}
        >
            {copied ? (
                <span className="absolute text-white font-bold bg-black bg-opacity-50 rounded-md px-2 py-1">
                    Copied!
                </span>
            ) : (
                <p className="text-white font-bold">{color}</p>
            )}
        </div>
    );
};

export default ColorBox;
