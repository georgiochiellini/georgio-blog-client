import React, { useEffect, useMemo, useState } from 'react'
import { getVideos } from '../../api/videoAPI'
import AddVideo from '../../components/add-video/AddVideo'
import VideoBlock from '../../components/video-block/VideoBlock'
import './videos.scss'

const Videos = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos().then((data) => {
            setVideos(data.videos)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className='videos'>

            <div className="content component small">
                <div className="title">Your videos</div>
                {videos.map((data) => {
                    return <VideoBlock data={data} />
                })}
                <AddVideo />
            </div>

        </div>
    )
}

export default Videos