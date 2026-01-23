'use client';

import { useState, useEffect } from 'react';

export default function TypingName() {
    const [displayedText, setDisplayedText] = useState("");
    const fullName = "Santosh Bhandari";

    useEffect(() => {
        let timeoutId;
        let intervalId;

        timeoutId = setTimeout(() => {
            let index = 0;
            intervalId = setInterval(() => {
                index++;
                if (index <= fullName.length) {
                    setDisplayedText(fullName.slice(0, index));
                } else {
                    clearInterval(intervalId);
                }
            }, 150);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, []);

    return (
        <h1 className="name">
            {displayedText}
            <span className="cursor">|</span>
        </h1>
    );
}
