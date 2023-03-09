export const AUTOWATCH_DELAY = 1000 * 60 * 10   // ms
export const RE_REQUEST_DELAY = 1000 * 5  // ms
export const MIN_WATCH_TIME = 60  // sec

export const activityIndicate = (currWindow, cb) => {
    let prevActivity = false
    const currInterval = setInterval(() => {
        try {
            const a = currWindow.isTabActive
            if (prevActivity) {
                cb()
                clearInterval(currInterval)
            }
        } catch {
            prevActivity = true
        }
    }, 1000 * 2)
}