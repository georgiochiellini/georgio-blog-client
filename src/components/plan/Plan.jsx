import { observer } from 'mobx-react-lite'
import React, {useContext, useState} from 'react'
import { Context } from '../..'
import Button from '../../UI/button/Button'
import './plan.scss'

const Plan = (props) => {

    const submit = () => {

    }

    return (
        <div className={`plan box ${props.active ? 'active' : ''}`}>

            <div className="content">
                <div className="name">{props.data.name}</div>
                <div className="price">{props.data.price}$ per month</div>
                <div className="features">
                    {props.data.features.map((item) => {
                        return <div className="feature">• {item}</div>
                    })}
                </div>
            </div>
            {/* {!props.active && !props.main && <Button className={'filled'} label={'Subscribe'} onClick={submit} size={14} />} */}

        </div>
    )
}

export default Plan