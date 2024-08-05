import React, { useState } from 'react';
import '../CSS/FormComp.css';

function FormComp() {
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        const Rnumber = Math.floor(Math.random() * 10) + 1;
        console.log(Rnumber);
        setNumber(Rnumber);
    };

    return (
        <>
            <div className="container">
                <h1>Random Number</h1>
                <h2 key={number}>{number}</h2> {/* Add key to h2 */}
                <button onClick={handleClick}>Random Number</button>
            </div>
        </>
    );
}

export default FormComp;
