import React, { useState } from 'react'
import './switcher.scss'

// active, types, size, onClick

const Switcher = (props) => {

    const click = (index) => {
        props.onClick(index)
    }

    return (
        <div className='switcher'>
            {props.types.map((item, index) => {
                return <div
                    style={{width: props.size}}
                    className={`type ${index === props.active ? 'active' : ''}`}
                    onClick={() => click(index)}
                >
                    {item}
                </div>
            })}
        </div>
    )
}

export default Switcher