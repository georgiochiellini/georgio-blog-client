import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import PanelRef from '../../modules/panel-ref/PanelRef'
import Plans from '../../modules/plans/Plans'
import './premium.scss'

const Premium = observer(() => {
  const {user} = useContext(Context)

  return (
    <div className='premium'>

      <PanelRef />
      <Plans />
      

    </div>
  )
})

export default Premium