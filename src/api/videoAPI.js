import {$authHost, $host} from './index'

export const upload = async (videoId, playlistId) => {
    const {data} = await $authHost.post('api/video/upload', {videoId, playlistId})
    return data
}

export const remove = async (videoId) => {
    console.log(videoId)
    const {data} = await $authHost.delete('api/video/remove', {params: {videoId}})
    return data
}

export const toggleActive = async (videoId, bool) => {
    const {data} = await $authHost.put('api/video/active', {videoId, bool})
    return data
}

export const watched = async (time) => {
    const {data} = await $authHost.put('api/video/watch', {time})
    return data
}

export const getWatch = async () => {
    const {data} = await $authHost.put('api/video/get-watch')
    return data
}

export const getVideos = async () => {
    const {data} = await $authHost.get('api/video/')
    return data
}

export const getActive = async () => {
    const {data} = await $host.get('api/video/active')
    return data
}

export const getWatchTime = async () => {
    const {data} = await $authHost.get('api/video/time')
    return data
}
