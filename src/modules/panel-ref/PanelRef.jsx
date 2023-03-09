import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import { getReferralLink } from '../../api/userAPI'
import { CLIENT_URL } from '../../app/url'
import Button from '../../UI/button/Button'
import './panel-ref.scss'

const PanelRef = observer(() => {
    const {messages} = useContext(Context)

    const click = () => {
        getReferralLink().then(data => {
            const refUrl = CLIENT_URL + '?ref=' + data.referral
            navigator.clipboard.writeText(refUrl).then(() => {
                messages.add('Referral link was copied')
            })
        })
    }

    return (
        <div className='panel-ref component small'>
            <div className="title">Upgrade plan</div>

            <div className="referral">
                <Button className={''} label={'Copy referral link'} onClick={click} size={14} />
            </div>
        </div>
    )
})

export default PanelRef