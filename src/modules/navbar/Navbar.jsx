import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MAIN_ROUTE } from '../../routes/routesPath'
import { Context } from '../..'
import Logo from '../../UI/logo/Logo'
import './navbar.scss'
import PanelPoints from '../../components/panel-points/PanelPoints'
import PanelUser from '../../components/panel-user/PanelUser'

const Navbar = observer(() => {
    const navigate = useNavigate(null)
    const {user} = useContext(Context)

    return (
        <div className={`navbar scrolled`}>
            
            <div className="content component">

                <div className="side left">
                    <Logo size={30} onClick={() => navigate(MAIN_ROUTE)} />
                </div>

                {user.isAuth && <div className="side right">
                    <PanelUser username={user.info.username} />
                    <PanelPoints prp={user.info.prp + user.info.rfp} />
                </div>}
                
            </div>
            
        </div>
    )
})

export default Navbar