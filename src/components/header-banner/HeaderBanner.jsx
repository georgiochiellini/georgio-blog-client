import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ABOUT_ROUTE } from '../../routes/routesPath'
import Button from '../../UI/button/Button'
import './header-banner.scss'

const HeaderBanner = () => {
    const navigate = useNavigate(null)

    return (
        <div className="header-banner">
            <div className="title">
                <h1>Just watch it.</h1>
                <h2>It became easier to promote videos on YouTube. Join us now to find it out.</h2>
            </div>
            <Button className={''} label={'How it works'} onClick={() => navigate(ABOUT_ROUTE)} size={18} />
        </div>
    )
}

export default HeaderBanner