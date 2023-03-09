import React, { useState } from 'react'
import './panel-user.scss'
import editIcon from '../../assets/icons/white/edit.svg'
import logoutIcon from '../../assets/icons/white/logout.svg'
import ModalLogout from '../modal-logout/ModalLogout'
import ModalEditUser from '../modal-edit-user/ModalEditUser'

const PanelUser = (props) => {
    const [modalLogoutActive, setModalLogoutActive] = useState(false)
    const [modalEditActive, setModalEditActive] = useState(false)

    return (
        <>
        <div className='panel-user'>
            <div className="username">{props.username}</div>
            <div className="buttons">
                <img src={editIcon} onClick={() => setModalEditActive(true)} />
                <img src={logoutIcon} onClick={() => setModalLogoutActive(true)} />
            </div>
        </div>
        {modalLogoutActive && <ModalLogout closeFunc={() => setModalLogoutActive(false)} />}
        {modalEditActive && <ModalEditUser closeFunc={() => setModalEditActive(false)} />}
        </>
        
    )
}

export default PanelUser