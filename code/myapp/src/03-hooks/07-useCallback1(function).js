import React, { useState } from 'react';

export default function Add({ onAdd }) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAdd = () => {
        onAdd(text);
        setText('');
    };

    return (
        <div>
            <input onChange={handleChange} value={text}></input>
            <button onClick={handleAdd}>add</button>
        </div>
    );
}
