import { observer } from 'mobx-react-lite'
import React from 'react'
import Button from '../button/Button'
import './modal.scss'

const Modal = (props) => {

    const continueFunc = () => {
        props.nextFunc()
    }

    const cancelFunc = () => {
        props.backFunc()
    }

    return (
        <div className='modal'>
            
            <div className="content component box">
                <div className="title">{props.title}</div>
                {!!props.text && <div className="text">{props.text}</div> }
                <div className="body">
                    {props.children}
                </div>
                <div className="buttons">
                    <Button className={''} label={'Cancel'} onClick={cancelFunc} size={14} />
                    <Button className={'filled'} label={'Continue'} onClick={continueFunc} size={14} />
                </div>

            </div>

        </div>
    )
}

export default Modal