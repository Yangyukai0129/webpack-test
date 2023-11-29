import React, { useState } from 'react';
import Add from './07-useCallback1(function)';

export default function App() {
    const [list, setList] = useState(['aa', 'bb', 'cc']);

    const handleAdd = (newItem) => {
        setList([...list, newItem]);
    };

    const handleDel = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    return (
        <div>
            <Add onAdd={handleAdd} />
            <ul>
                {list.map((item, index) => (
                    <li key={item}>
                        {item}
                        <button onClick={() => handleDel(index)}>del</button>
                    </li>
                ))}
            </ul>
            {!list.length && '暫無代辦事項'}
        </div>
    );
}