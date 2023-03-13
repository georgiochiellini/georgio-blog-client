import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import Message from '../../UI/message/Message'
import './messages.scss'

const Messages = observer(() => {
    const {messages} = useContext(Context)
    
    return (
        <div className='messages'>
            {messages.data.map((mess, index) => {
                return <Message message={mess} position={70 + index * 50} />
            })}
        </div>
    )
})

export default Messages