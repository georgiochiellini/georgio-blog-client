import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { edit } from '../../api/userAPI'
import Input from '../../UI/input/Input'
import Loader from '../../UI/loader/Loader'
import Modal from '../../UI/modal/Modal'
import EmailSender from '../email-sender/EmailSender'
import './modal-edit-user.scss'

const ModalEditUser = observer((props) => {
    const {messages} = useContext(Context)

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const navigate = useNavigate(null)

    const [isLoading, setIsLoading] = useState(false)
    const [focusType, setFocusType] = useState(0)



    const click = () => {
        if (isLoading) return
        setIsLoading(true)
        edit(userName, password, email, code).then(() => {
            navigate(0)
        }).catch((err) => {
            messages.add(err.response.data.message)
            setIsLoading(false)
        })
    }

    const nextFocus = () => {
        setFocusType(focusType + 1)
    }

    return (
        <Modal title={'Edit user'} nextFunc={click} backFunc={props.closeFunc}>

            {!isLoading && <div className='modal-edit-user'>
                <Input
                    placeholder={'New Username'}
                    type={'text'}
                    valueFunc={setUsername}
                    focus={focusType === 0}
                    focusFunc={() => setFocusType(0)}
                    nextFunc={nextFocus}
                />
                <Input
                    placeholder={'New Password'}
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
                    nextFunc={click}
                />
            </div>}

            {isLoading &&
                <div className="load-wrapper">
                    <Loader />
                </div>
            }

        </Modal>
    )
})

export default ModalEditUser