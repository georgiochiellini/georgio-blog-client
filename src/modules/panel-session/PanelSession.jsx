import React, { useState } from 'react'
import SessionProcess from '../../components/session-process/SessionProcess'
import ButtonCircle from '../../UI/button-circle/ButtonCircle'
import './panel-session.scss'

const PanelSession = () => {
    const [active, setActive] = useState(false)

    return (
        <div className='panel-session component'>
            
            {/* {!active &&
                <>
                <ButtonCircle title={'Start'} center onClick={() => setActive(true)} />
                <div className="label">Press start to start the session</div>
                </>
            }

            {active && <SessionProcess stopFunc={() => setActive(false)} />} */}

        </div>
    )
}

export default PanelSession