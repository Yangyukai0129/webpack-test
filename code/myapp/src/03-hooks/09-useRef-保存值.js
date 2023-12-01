import React, { useRef, useState } from 'react'

export default function App() {

    const [num, setnum] = useState(0)
    const numref = useRef(0)

    return (
        <div>
            <button onClick={() => {
                setnum(num + 1)
                numref.current++
            }}>Add</button>
            <h1>{num}-{numref.current}</h1>
        </div>
    )
}
