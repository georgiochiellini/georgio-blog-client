import React from 'react'
import Loader from '../../UI/loader/Loader'
import './mobile-page.scss'

const MobilePage = () => {
    return (
        <div className='mobile-page'>

            <Loader animDisable />
            <div className="text">The service is not available for mobile devices</div>

        </div>
    )
}

export default MobilePage