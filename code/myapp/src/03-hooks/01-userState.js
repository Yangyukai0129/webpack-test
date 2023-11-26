import React, { useState } from 'react'

export default function App() {

    const [name, setName] = useState("kevin")
    const [age, setAge] = useState(100)

    return (
        <div>
            <button onClick={() => {
                setName("xiaoming")
            }}>click</button>
            app-{name}-{age}
        </div>
    )
}
