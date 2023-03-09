

const zeroPad = (num) => {
    return num > 9 ? `${num}` : `0${num}`
}

export const convertTime = (value) => {
    const min = zeroPad(parseInt(Math.floor(value / 60)))
    const sec = zeroPad(value - min * 60)
    return {min, sec}
}