import React from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../UI/modal/Modal'
import './modal-logout.scss'

const ModalLogout = (props) => {
    const navigate = useNavigate(null)

    const click = () => {
        localStorage.removeItem('token')
        navigate(0)
    }

    return (
        <Modal title={'Are you sure you want to logout?'} nextFunc={click} backFunc={props.closeFunc}>
        </Modal>
    )
}

export default ModalLogout