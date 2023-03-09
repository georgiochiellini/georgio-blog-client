import { observer } from 'mobx-react-lite'
import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { login } from '../../api/userAPI'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import EmailSender from '../email-sender/EmailSender'
import './form-auth.scss'

const FormAuth = observer(() => {
    const {messages} = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const [focusType, setFocusType] = useState(0)

    const navigate = useNavigate(null)
    const [isForgot, setIsForgot] = useState(false)

    const forgotFunc = () => {
        setPassword('')
        setEmail('')
        setCode('')
        setFocusType(0)
        setIsForgot(!isForgot)
    }

    const submit = () => {
        login(username, password, email, code).then(() => {
            navigate(0)
        }).catch((err) => {
            messages.add(err.response.data.message)
        })
    }

    const nextFocus = () => {
        setFocusType(focusType + 1)
    }

    return (
        <div className='form-auth box'>
            <Input
                placeholder={'Username'}
                type={'text'}
                valueFunc={setUsername}
                focus={focusType === 0}
                focusFunc={() => setFocusType(0)}
                nextFunc={nextFocus}
            />
            {!isForgot && <Input
                placeholder={'Password'}
                type={'password'}
                valueFunc={setPassword}
                focus={focusType === 1}
                focusFunc={() => setFocusType(1)}
                nextFunc={submit}
            />}
            {isForgot && <EmailSender
                emailFunc={setEmail}
                codeFunc={setCode}
                focus={focusType === 1}
                focusFunc={() => setFocusType(1)}
                nextFunc={submit}
            />}
            <div className="buttons">
                <Button
                    className={'underline'}
                    label={isForgot ? 'Cancel' : 'Forgot password'}
                    onClick={forgotFunc}
                    size={14}
                />
                <Button
                    className={'filled'}
                    label={'Continue'}
                    onClick={submit}
                    size={14}
                />
            </div>
        </div>
        
    )
})

export default FormAuth