import { observer } from 'mobx-react-lite'
import React, { useContext, useRef, useState } from 'react'
import { Context } from '../..'
import { sendEmail } from '../../api/userAPI'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import './email-sender.scss'

const EmailSender = observer((props) => {
    const {messages} = useContext(Context)
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const [loading, setLoading] = useState(false)

    const typeEmail = (value) => {
        setEmail(value)
        props.emailFunc(value)
    }
    const typeCode = (value) => {
        setCode(value)
        props.codeFunc(value)
    }

    const sendCode = () => {
        if (loading) return
        setLoading(true)
        sendEmail(email).then(() => {
            messages.add('Code was sended to your email')
        }).catch((err) => {
            messages.add(err.response.data.message)
        }).finally(() => {
            setTimeout(() => setLoading(false), 1000 * 5 + 500)
        })
    }

    return (
        <div className='email-sender'>
            <div className="email-field">
                <Input
                    placeholder={'Email'}
                    type={'text'}
                    valueFunc={typeEmail}
                    focus={props.focus} 
                    focusFunc={props.focusFunc}
                    nextFunc={sendCode}
                />
                <Button className={''} label={'Send'} onClick={sendCode} size={13} disable={loading} />
            </div>
            <div className="code-field">
                <Input placeholder={'Code'} type={'password'} valueFunc={typeCode} nextFunc={props.nextFunc} />
            </div>
        </div>
    )
})

export default EmailSender