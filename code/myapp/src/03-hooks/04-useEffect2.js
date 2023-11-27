import React, { useEffect, useState } from 'react'

export default function App() {

    const [name, setname] = useState("kevin")
    useEffect(() => {
        setname(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])

    return (
        <div>
            <button onClick={() => {
                setname("xiaoming")
            }}>click</button>
            App-{name}
        </div>
    )
}
