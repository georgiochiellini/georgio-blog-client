import React from 'react'
import arrowIcon from '../../assets/icons/white/arrow.svg'
import './scroller.scss'

const Scroller = (props) => {

    const scrollFunc = () => {
        window.scrollTo({top: props.coords, left: 0, behavior: 'smooth'})
    }

    return (
        <div className={`scroller ${props.className}`} onClick={scrollFunc}>
            {props.up && <img className='up' src={arrowIcon} />}
            <span>{props.label}</span>
            {props.down && <img className='down' src={arrowIcon} />}
        </div>
    )
}

export default Scroller