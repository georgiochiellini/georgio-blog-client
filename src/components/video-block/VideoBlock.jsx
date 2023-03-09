import React, { useMemo, useState } from 'react'
import './video-block.scss'
import playIcon from '../../assets/icons/d2/play.svg'
import closeIcon from '../../assets/icons/white/close.svg'
import viewActiveIcon from '../../assets/icons/s2/view.svg'
import viewIcon from '../../assets/icons/d3/view.svg'
import toggleActiveIcon from '../../assets/icons/s2/toggle.svg'
import toggleIcon from '../../assets/icons/d3/toggle.svg'
import { convertTime } from '../../utils/convertTime'
import ModalRemoveVideo from '../modal-remove-video/ModalRemoveVideo'
import { toggleActive } from '../../api/videoAPI'

const VideoBlock = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [isActive, setIsActive] = useState(props.data.active)
    const [pressed, setPressed] = useState(false)

    const duration = useMemo(() => {
        if (!props.data.duration) return {min: '00', sec: '00'}
        return convertTime(props.data.duration)
    }, [props.data])

    const screenClick = () => {
        window.open(props.data.url)
    }

    const clickActive = () => {
        if (pressed) return
        setPressed(true)
        toggleActive(props.data.videoId, !isActive).then(() => {
            setIsActive(!isActive)
        })
        setTimeout(() => setPressed(false), 1 * 1000)
    }

    return (
        <>
        <div className='video-block box'>
            
            <div className="left-side side">
                <div className="screen" onClick={screenClick} style={{backgroundImage: `url('${props.data.photo}')`}}>
                    <div className="play">
                        <img src={playIcon} />
                    </div>
                    <div className="duration">{duration.min}:{duration.sec}</div>
                </div>
                <div className="info">
                    <div className="text-info">
                        <div className="title">{props.data.name}</div>
                        <div className="channel-title">{props.data.channelName}</div>
                    </div>
                    <div className="category">{props.data.category}</div>
                </div>
            </div>

            <div className="right-side side">
                <div className="delete" onClick={() => setModalActive(true)}>
                    <img src={closeIcon} />
                </div>
                <div className="bottom-panel">
                    {props.data.inView ? <img src={viewActiveIcon}/> : <img src={viewIcon} /> }
                    {isActive ? <img onClick={clickActive} src={toggleActiveIcon}/>
                        : <img onClick={clickActive} style={{transform: `rotate(180deg)`}} src={toggleIcon} /> }
                </div>
            </div>

        </div>

        {modalActive && <ModalRemoveVideo code={props.data.videoId} closeFunc={() => setModalActive(false)} />}
        </>
        
    )
}

export default VideoBlock