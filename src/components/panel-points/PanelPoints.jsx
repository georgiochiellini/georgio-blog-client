import React, { useEffect, useState } from 'react'
import Countdown from '../../UI/countdown/Countdown'
import cycleIcon from '../../assets/icons/white/cycle.svg'
import './panel-points.scss'
import { getWatchTime } from '../../api/videoAPI'

const PanelPoints = (props) => {
    const [watchTime, setWatchTime] = useState(0)

    useEffect(() => {
        getWatchTime().then(data => setWatchTime(data.tw))
    }, [])

    return (
        <div className='panel-points'>
            <div className="points">
                <div className="point twp">
                    <span>{watchTime} min</span>
                </div>

                <div className="point prp">
                    <span>{props.prp / 100} X</span>
                </div>
            </div>

            {/* <div className="time">
                <img src={cycleIcon} />
                <Countdown interval={3} delay={30}/>
            </div> */}
            
        </div>
    )
}

export default PanelPoints