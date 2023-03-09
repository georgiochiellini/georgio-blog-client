import React, { useEffect, useMemo, useState } from 'react'
import { convertTime } from '../../utils/convertTime'
import './stopwatch.scss'

const Stopwatch = (props) => {
    const [ticks, setTicks] = useState(0)
    const [startTime, setStartTime] = useState(new Date().getTime())
    const [time, setTime] = useState({min: 0, sec: 0})

    useEffect(() => {
        const currTime = new Date().getTime()
        const tempTime = convertTime(parseInt(Math.round((currTime - startTime) / 1000)))
        setTime(tempTime)
        setTimeout(() => {setTicks(ticks + 1)}, 1000)
    }, [ticks])

    return (
        <div className={`stopwatch ${props.className}`}>
            {time.min}:{time.sec}
        </div>
    )
}

export default Stopwatch