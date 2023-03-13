import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUT_ROUTE, PREMIUM_ROUTE } from '../../routes/routesPath'
import Button from '../../UI/button/Button'
import Loader from '../../UI/loader/Loader'
import './pre-release-module.scss'

const PreReleaseModule = () => {
    const navigate = useNavigate(null)

    return (
        <div className='pre-release-module'>
            
            <div className="content component small">
                {/* <div className="label">
                    <span className="w">m</span>
                    <span>atchmachine</span>
                </div> */}
                <Loader animDisable />
                <div className="buttons">
                    <Button className={''} label={'About'} onClick={() => navigate(ABOUT_ROUTE)} size={14} />
                    <Button className={'filled'} label={'Upgrade plan'} onClick={() => navigate(PREMIUM_ROUTE)} size={14} />
                </div>
                <div className="text">Wait for release</div>
                

            </div>
        </div>
    )
}

export default PreReleaseModule