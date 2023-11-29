import React, { useState } from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])

    const handleChange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }

    const handleAdd = () => {
        setList([...list, text])
        // 新增完後透過value值讓input標籤變成受控以清空欄位
        setText("")
    }

    const handleDel = (index) => {
        var newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <div>
            <input onChange={handleChange} value={text}></input>
            <button onClick={handleAdd}>add</button>
            <ul>
                {list.map((item, index) => <li key={item}>{item}
                    <button onClick={handleDel.bind(this, index)}>del</button>
                </li>)}
            </ul>
            {!list.length && "暫無代辦事項"}
        </div>
    )
}
