import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../..'
import Plan from '../../components/plan/Plan'
import './plans.scss'

const Plans = observer((props) => {
    const {user} = useContext(Context)
    const userPlan = useMemo(() => {
        if (!user.isAuth || user.info.status === 'vip') return -1
        if(user.info.status === 'basic') return 0
        else if (user.info.status === 'pro') return user.info.level + 1
    }, [user.isAuth])

    const plansConfig = [
        { name: 'Basic', price: 0, features: ['free views', '1 extra minutes of view each cycle'] },
        { name: 'Pro 1', price: 9.99, features: ['2x initial chance to be in the videos list', '3 extra minutes of view each cycle', '2.5x more views'] },
        { name: 'Pro 2', price: 19.98, features: ['5x initial chance to be in the videos list', '5 extra minutes of view each cycle', '5x more views'] },
        { name: 'Pro 3', price: 34.95, features: ['10x initial chance to be in the videos list', '5 extra minutes of view each cycle', '11x more views'] },
        { name: 'Pro 4', price: 59.93, features: ['22x initial chance to be in the videos list', '10 extra minutes of view each cycle', '28x more views'] },
        { name: 'Pro 5', price: 89.92, features: ['55x initial chance to be in the videos list', '15 extra minutes of view each cycle', '38x more views'] }
    ]


    return (
        <div className={`plans ${props.main ? 'main' : ''}`}>

            {plansConfig.map((item, index) => {
                return <Plan data={item} main={props.main} active={index === userPlan} />
            })}

        </div>
    )
})

export default Plans