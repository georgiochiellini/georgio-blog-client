import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { upload } from '../../api/videoAPI'
import Input from '../../UI/input/Input'
import Loader from '../../UI/loader/Loader'
import Modal from '../../UI/modal/Modal'
import { checkLink, getLinkIds } from '../../utils/linkOperations'
import './modal-load-video.scss'

const ModalLoadVideo = observer((props) => {
    const {messages} = useContext(Context)

    const navigate = useNavigate(null)

    const [isLoading, setIsLoading] = useState(false)
    const [url, setUrl] = useState('')
    const [focus, setFocus] = useState(true)



    const click = () => {
        if (!checkLink(url)) {
            messages.add('Invalid URL')
            return
        }
        setIsLoading(true)
        const ids = getLinkIds(url)
        upload(ids.videoId, ids.playlistId).then(() => {
            navigate(0)
        }).catch((err) => {
            messages.add(err.response.data.message)
            setIsLoading(false)
        })
    }

    return (
        <Modal title={'Add video'} nextFunc={click} backFunc={props.closeFunc} text={'Paste video URL from your playlist'}>

            {!isLoading && <div className='modal-load-video'>
                <Input
                    placeholder={'URL'}
                    type={'text'}
                    valueFunc={setUrl}
                    focus={focus}
                    focusFunc={() => setFocus(true)}
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

export default ModalLoadVideo