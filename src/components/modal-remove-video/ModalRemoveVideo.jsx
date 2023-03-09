import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { remove } from '../../api/videoAPI'
import Loader from '../../UI/loader/Loader'
import Modal from '../../UI/modal/Modal'
import './modal-remove-video.scss'

const ModalRemoveVideo = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate(null)

    const click = () => {
        setIsLoading(true)
        remove(props.code).then(() => {
            navigate(0)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }

    return (
        <Modal title={'Are you sure you want to remove the video?'} nextFunc={click} backFunc={props.closeFunc}>

            {isLoading &&
                <div className="load-wrapper">
                    <Loader />
                </div>
            }

        </Modal>
    )
}

export default ModalRemoveVideo