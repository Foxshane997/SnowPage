// Snowfall.js
import React, { useEffect } from 'react';
import '../styles/SnowFall.css'

const SnowFall = () => {
    useEffect(() => {
        // Generate snowflakes and add them to the DOM
        const snowContainer = document.getElementById('snow-container');

        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';

            // Randomize position and size of each snowflake
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.width = `${Math.random() * 5 + 2}px`;
            snowflake.style.height = snowflake.style.width;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
            snowContainer.appendChild(snowflake);

            // Remove snowflake after animation ends
            setTimeout(() => snowflake.remove(), 5000);
        };

        // Create snowflakes at intervals
        const snowInterval = setInterval(createSnowflake, 200);

        // Clean up on component unmount
        return () => clearInterval(snowInterval);
    }, []);

    return <div id="snow-container"></div>;
};

export default SnowFall;
