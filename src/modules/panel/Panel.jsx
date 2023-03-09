import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUT_ROUTE, PREMIUM_ROUTE, SESSION_ROUTE } from '../../routes/routesPath'
import Button from '../../UI/button/Button'
import './panel.scss'

const Panel = () => {
    const navigate = useNavigate(null)

    return (
        <div className='panel'>

            <div className="content component small">
            
                <div className="left-side side">
                    <Button className={'outline'} label={'Upgrade plan'} onClick={() => navigate(PREMIUM_ROUTE)} size={14} />
                </div>

                <div className="right-side side">
                    <Button className={''} label={'How it works'} onClick={() => navigate(ABOUT_ROUTE)} size={14} />
                    <Button className={'filled'} label={'Start session'} onClick={() => {}} size={14} />
                </div>
                
            </div>
            
        </div>
    )
}

export default Panel