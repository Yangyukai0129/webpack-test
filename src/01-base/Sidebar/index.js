import React from 'react'
// function沒有this，所以不能像class一樣用this.props
export default function Sidebar(props) {
    // console.log(props)
    let obj = props
    console.log(obj)

    let obj1 = {
        left: 0
    }

    let obj2 = {
        right: 0
    }

    let obj3 = {
        background: obj.bg,
        width: "200px",
        position: "fixed"
    }

    let styleobj = obj.position === 'left' ? { ...obj3, ...obj1 } : { ...obj3, ...obj2 }
    return (
        <div>
            <ul style={styleobj}>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
                <li>111111</li>
            </ul>
        </div>
    )
}

// Sidebar.defaultprops
// Sidebar.propTypes

