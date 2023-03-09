import React, { useState } from 'react'
import './logo.scss'
import logoIcon from '../../assets/logo-alt.svg'

const Logo = (props) => {

    const click = () => {
        if (!props.onClick) return
        props.onClick()
    }

    return (
        <div className={`logo`} onClick={click}>
            <img src={logoIcon} style={{height: props.size, width: 'auto', cursor: !!props.onClick ? 'pointer' : 'default'}} />
        </div>
    )
}

export default Logo