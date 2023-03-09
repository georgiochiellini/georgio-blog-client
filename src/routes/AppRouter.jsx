import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '../index'
import { authRoutes, mobileRoutes, unauthRoutes } from './routes'
import { MAIN_ROUTE } from './routesPath'

const AppRouter = observer(() => {
    const {user, mobile} = useContext(Context)

    console.log(mobile.data)

    return (
        <Routes>
            {!mobile.data && user.isAuth &&
                authRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={Component} />
            })}
            {!mobile.data && !user.isAuth &&
                unauthRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={Component} />
            })}
            {mobile.data && 
                mobileRoutes.map(({path, Component}) => {
                    return <Route key={path} path={path} element={Component} />
            })}
            
            <Route path='*' element={<Navigate replace to={MAIN_ROUTE} />} />
        </Routes>
    )
})

export default AppRouter