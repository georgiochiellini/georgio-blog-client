import React, { useEffect, useState } from 'react'
import './message.scss'

const Message = (props) => {

    // const close = () => {
    //     props.messageFunc('')
    // }

    // useEffect(() => {
    //     if (!props.message) return
    //     setTimeout(() => close(), 1000 * 5)
    // }, [props.message])

    return (
        <div className={`message box`} style={{top: props.position}}>
            <span>{props.message}</span>
        </div>
    )
}

export default Message

//${!!props.message ? 'active' : ''}`}