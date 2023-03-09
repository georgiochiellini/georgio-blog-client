import React, { useState } from 'react'
import ModalLoadVideo from '../modal-load-video/ModalLoadVideo'
import './add-video.scss'

const AddVideo = () => {
    const [modalActive, setModalActive] = useState(false)

    const click = () => {
        setModalActive(true)
    }

    return (
        <>
        <div className='add-video box' onClick={click}>

            <div className="content">
                <span className='label l'>+</span>
                <span className='label r'>Add video</span>
            </div>

        </div>

        {modalActive && <ModalLoadVideo closeFunc={() => setModalActive(false)} />}
        </>
        
    )
}

export default AddVideo