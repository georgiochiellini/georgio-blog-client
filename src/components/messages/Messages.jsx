import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import Message from '../../UI/message/Message'
import './messages.scss'

const Messages = observer(() => {
    const {messages, mobile} = useContext(Context)
    
    return (
        <>
        {!mobile.data && <div className='messages'>
            {messages.data.map((mess, index) => {
                return <Message message={mess} position={75 + index * 50} />
            })}
        </div>}
        </>
        
    )
})

export default Messages