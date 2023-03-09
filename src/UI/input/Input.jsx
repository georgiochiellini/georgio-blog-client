import React, { useEffect, useRef, useState } from 'react'
import './input.scss'

const Input = (props) => {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const typeFunc = (e) => {
        setValue(e.target.value)
        props.valueFunc(e.target.value)
    }

    const enterFunc = (e) => {
        if (e.keyCode === 13) props.nextFunc()
    }

    const clickFunc = () => {
        props.focusFunc()
    }

    useEffect(() => {
        if (!props.focus) return
        inputRef.current.focus()
    }, [props.focus])

    return (
        <div className="input">
            <div className="placeholder">{props.placeholder}</div>
            <input
                type={props.type}
                value={value}
                ref={inputRef}
                onChange={typeFunc}
                onKeyDown={enterFunc}
                onClick={clickFunc}
            />
        </div>
        
    )
}

export default Input