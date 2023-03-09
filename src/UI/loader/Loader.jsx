import React from 'react'
import './loader.scss'
import logoIcon from '../../assets/logo-alt.svg'

const Loader = (props) => {

    return (
        <div className={`_loader ${props.main ? 'main' : ' '}  ${!props.animDisable ? 'anim' : ' '}`}>
            <img src={logoIcon} />
        </div>
    )
}

export default Loader