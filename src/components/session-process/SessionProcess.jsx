import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { getWatch, watched } from '../../api/videoAPI'
import Button from '../../UI/button/Button'
import Loader from '../../UI/loader/Loader'
import Stopwatch from '../../UI/stopwatch/Stopwatch'
import { activityIndicate, MIN_WATCH_TIME } from '../../utils/sessionConsts'
import MuteDetector from '../mute-detector/MuteDetector'
import './session-process.scss'

const SessionProcess = observer(() => {
    const {messages, windowOpener} = useContext(Context)
    const navigate = useNavigate(null)
    const [stopped, setStopped] = useState(false)
    const [startTime, setStartTime] = useState(0)
    const [muteChecking, setMuteChecking] = useState(false)

    useEffect(() => {
        findPlaylist()
    }, [])

    const muteIndicate = (isMuted) => {
        if (isMuted) {
            messages.add('Unmute videos in YouTube')
            windowOpener.close()
            navigate(0)
        } else {
            setMuteChecking(false)
        }   
    }

    const popupsFunc = () => {
        messages.add('Remove the pop-up blocker')
        windowOpener.close()
        navigate(0)
    }

    const tabClosed = () => {
        if (!windowOpener.isOpened()) return
        stop()
    }

    const findPlaylist = () => {
        setStopped(true)
        windowOpener.close()
        setTimeout(() => {
            getWatch().then((data) => {
                const playlist = data.next
                windowOpener.open(playlist.url)
                setMuteChecking(true)
                if (!windowOpener.isOpened()) popupsFunc()
                setStartTime(new Date().getTime())
                activityIndicate(windowOpener.currentWindow, tabClosed)
                setStopped(false)
                setTimeout(() => {
                    countPoints(playlist.duration)
                    findPlaylist()
                }, 1000 * playlist.duration)
            }).catch((err) => {
                messages.add(err.response.data.message)
                stop()
            })
        }, 1000 * 3)
    }

    const countPoints = (time) => {
        watched(time)
    }

    const stop = () => {
        if (stopped) return
        setStopped(true)
        const stopTime = new Date().getTime()
        const watchDuration = parseInt(Math.round((stopTime - startTime) / 1000))
        windowOpener.close()
        if (!startTime || watchDuration < MIN_WATCH_TIME) {
            navigate(0)
            return
        }
        countPoints(watchDuration)
        setTimeout(() => navigate(0), 1000 * 3)
    }

    return (
        <div className='session-process'>

            {muteChecking && <MuteDetector isMuted={muteIndicate} />}
            <Stopwatch className={'center'} />
            <Loader main />
            <div className="label center">{stopped ? '' : 'Session in process...'}</div>
            {!stopped && <Button className={'center'} label={'Stop session'} onClick={stop} size={16} />}

        </div>
    )
})

export default SessionProcess