import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

    const [list, setList] = useState([])
    // 直接用axios會直接進入死循環，更新狀態會觸發函數組件再次執行，即這個函數就相當於render()週期
    // axios.get("/test.json").then(
    //     res => {
    //         console.log(res.data)
    //         setList(res.data)
    //     }
    // ).catch(err => console.log(err))

    //useEffect 的第一个参数是一个函数，这个函数包含了在组件挂载后需要执行的副作用代码。useEffect 的第二个参数是一个依赖数组，
    // 用于指定在数组内的依赖项发生变化时才执行副作用代码。如果依赖数组为空，表示只在组件挂载和卸载时执行(componenetDidMount)
    useEffect(() => {
        axios.get("/test.json").then(
            res => {
                console.log(res.data)
                setList(res.data.films)
            }
        ).catch(err => console.log(err))
    }, [])


    return (
        <div>
            <ul>
                {/* list重置的話，為什麼能渲染返回來的數據?因為setList會將修改後的狀態記錄下來 */}
                {list.map(item =>
                    <li key={item.id}>{item.title}</li>
                )}
            </ul>
        </div>
    )
}
