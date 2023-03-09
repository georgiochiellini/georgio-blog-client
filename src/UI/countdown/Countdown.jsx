import React, { useEffect, useState } from 'react'
import { convertTime } from '../../utils/convertTime'
import './countdown.scss'

const Countdown = (props) => {
    const [time, setTime] = useState({min: '00', sec: '00'})
    const [tick, setTick] = useState(0)

    useEffect(() => {
        const date = new Date()
        let nextStop = date.getHours() + 1
        while (nextStop % props.interval !== 0) nextStop++
        const timeLeft = (nextStop - date.getHours() - 1) * 60 + (60 - date.getMinutes())
        setTime(convertTime(timeLeft))
        setTimeout(() => setTick(tick + 1), 1000 * props.delay)
    }, [tick])

    return (
        <div className='countdown'>
            {time.min}:{time.sec}
        </div>
    )
}

export default Countdown