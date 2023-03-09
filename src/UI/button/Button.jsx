import React, { useState } from 'react'
import './button.scss'

const Button = (props) => {
    const [delay, setDelay] = useState(props.delay || 2000)  // ms
    const [isClickable, setIsClickable] = useState(true)

    const click = () => {
        if (props.disable || !isClickable) return
        props.onClick()
        setIsClickable(false)
        setTimeout(() => setIsClickable(true), delay)
    }

    return (
        <button className={`button ${props.className} ${props.disable ? 'disable' : ''}`} onClick={click} >
            <span style={{fontSize: props.size}} >{props.label}</span>
        </button>
    )
}

export default Button