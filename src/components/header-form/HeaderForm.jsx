import React, { useState } from 'react'
import Switcher from '../../UI/switcher/Switcher'
import FormAuth from '../form-auth/FormAuth'
import FormReg from '../form-reg/FormReg'
import './header-form.scss'

const HeaderForm = () => {
    const [activeType, setActiveType] = useState(0)

    const click = (index) => {
        setActiveType(index)
    }

    return (
        <div className="header-form">
            <Switcher active={activeType} types={['Sign Up', 'Sign In']} size={150} onClick={click} />
            {!activeType && <FormReg />}
            {!!activeType && <FormAuth />}
        </div>
    )
}

export default HeaderForm