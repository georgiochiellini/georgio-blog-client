import React, { useEffect } from 'react'
import './mute-detector.scss'
import YouTube from 'react-youtube'

const MuteDetector = (props) => {

    const opts = {
        height: '0', width: '0'
    }

    const onReady = (event) => {
        props.isMuted(event.target.isMuted())
    }

    return (
        <div className='mute-detector'>

            <YouTube opts={opts} onReady={onReady} />
            
        </div>
    )
}

export default MuteDetector