import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../modules/header/Header'
import Plans from '../../modules/plans/Plans'
import BackgroundHeader from '../../UI/background-header/BackgroundHeader'
import './main.scss'

const Main = () => {

  return (
    <div className='main'>

      <BackgroundHeader />

      <Header />
      <Plans main />

    </div>
  )
}

export default Main