import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

function useCinemaList() {
    const [cinemaList, setcinemaList] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            res => {

                console.log(res.data)

                setcinemaList(res.data)

            }).catch(err => console.log(err))
    }, [])

    return { cinemaList }
}

function useFilter(cinemaList, text) {
    const getcinemaList = useMemo(
        () => {
            //第一個return是為了返回數據過濾的值
            return cinemaList.filter(item => {
                //第二個return是為了返回過濾後的結果作為方法的返回值
                return item.title.toUpperCase().includes(text.toUpperCase())
            })
        }, [cinemaList, text])

    return { getcinemaList }
}

export default function App() {

    const [text, settext] = useState("")
    const { cinemaList } = useCinemaList()
    const { getcinemaList } = useFilter(cinemaList, text)

    return (
        <div>
            <input onChange={(e) => {
                settext(e.target.value)
            }}></input>
            {getcinemaList.map(item => <dl key={item.id}><dd>{item.title}</dd></dl>)}
        </div>
    )
}



