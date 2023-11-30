import React, { useRef, useState } from 'react'

export default function App() {

    const [list, setList] = useState(["aa", "bb", "cc"])

    const mytext = useRef()

    const handleAdd = () => {
        setList([...list, mytext.current.value])
        // 新增完後透過value值讓input標籤變成受控以清空欄位
        // setText("")
        mytext.current.value = ""
    }

    const handleDel = (index) => {
        var newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <div>
            <input ref={mytext}></input>
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
