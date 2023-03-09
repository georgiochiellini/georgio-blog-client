import React from 'react'
import './pre-release-about-module.scss'

const PreReleaseAboutModule = () => {

    return (
        <div className='about-module'>

            <div className="content component small box">
                <div className="title">Pre-release information</div>

                <div className="text">
                    <span>The main goal of our service is to help beginner YouTube channels get their first views and get into YouTube recommendations.</span>
                    <span>Your videos will only be watched by real users like you. All you need to do is watch other users' videos. In this way, you will increase your chance of getting into our video list.</span>
                    <span>It will absolutely not waste your time, because the videos will be played automatically in the background.</span>
                    <span>To increase the initial chance of getting into the video list, you can upgrade the plan or invite friends to register via the referral link (it is in the upgrade plan section).</span>
                    <span>More detailed instructions will be available after the release of the service.</span>
                </div>

                <div className="list">
                    <span className="label">Free premium subscriptions are available for the first registered users of the service:</span>
                    <ul>
                        <li>the first 10 users will receive a free <b>PRO 4</b> subscription.</li>
                        <li>the first 100 users will receive a free <b>PRO 3</b> subscription.</li>
                        <li>the first 1000 users will receive a free <b>PRO 2</b> subscription.</li>
                        <li>the first 5000 users will receive a free <b>PRO 1</b> subscription.</li>
                    </ul>
                </div>

                {/* <div className="text">
                    <span>More detailed instructions will be available after the release of the service.</span>
                </div> */}
                
            </div>
            


        </div>
    )
}

export default PreReleaseAboutModule