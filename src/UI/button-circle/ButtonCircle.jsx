import React, { useState } from 'react'
import './button-circle.scss'

const ButtonCircle = (props) => {
    const [hidden, setHidden] = useState(false)

    const click = () => {
        if (hidden) return
        setHidden(true)
        setTimeout(() => {
            props.onClick()
        }, 1000 * .4)
        
    }

    return (
        <button className={`button-circle ${hidden ? 'hidden' : ''} ${props.center ? 'center' : ''}`} onClick={click} >
            <div>
                <span>{props.title}</span>
            </div>
        </button>
    )
}

export default ButtonCircle