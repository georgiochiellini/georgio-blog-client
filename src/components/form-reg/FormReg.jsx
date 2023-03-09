import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { registration } from '../../api/userAPI'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import EmailSender from '../email-sender/EmailSender'
import './form-reg.scss'

const FormReg = observer(() => {
    const location = useLocation(null).search
    const {messages} = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [focusType, setFocusType] = useState(0)

    const navigate = useNavigate(null)

    useEffect(() => {
        const refLink = location.split('?ref=')[1]
        if (!refLink) return
        localStorage.setItem('ref', refLink)
    }, [location])
    
    const submit = () => {
        const ref = localStorage.getItem('ref') || ''
        registration(username, password, email, code, ref).then(() => {
            navigate(0)
        }).catch((err) => {
            messages.add(err.response.data.message)
        })
    }

    const nextFocus = () => {
        setFocusType(focusType + 1)
    }

    return (
        <div className='form-reg box'>
            <Input
                placeholder={'Username'}
                type={'text'}
                valueFunc={setUsername}
                focus={focusType === 0}
                focusFunc={() => setFocusType(0)}
                nextFunc={nextFocus}
            />
            <Input
                placeholder={'Password'}
                type={'password'}
                valueFunc={setPassword}
                focus={focusType === 1}
                focusFunc={() => setFocusType(1)}
                nextFunc={nextFocus}
            />
            <EmailSender
                emailFunc={setEmail}
                codeFunc={setCode}
                focus={focusType === 2}
                focusFunc={() => setFocusType(2)}
                nextFunc={submit}
            />
            <div className="buttons">
                <Button className={'filled'} label={'Continue'} onClick={submit} size={14} />
            </div>
        </div>
        
    )
})

export default FormReg