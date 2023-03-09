import React from 'react'
import HeaderBanner from '../../components/header-banner/HeaderBanner'
import HeaderForm from '../../components/header-form/HeaderForm'
import Scroller from '../../UI/scroller/Scroller'
import './header.scss'

const Header = () => {


    return (
        <div className='header'>

            <div className="content component">
                <HeaderBanner />
                <HeaderForm />
            </div>
            
            <Scroller className={'h-scroller'} down label={'Pro plans'} coords={710} />
        </div>
  )
}

export default Header