import {makeAutoObservable} from 'mobx'

export default class WindowStore {
    constructor() {
        this._currentWindow = null
        makeAutoObservable(this)
    }

    open(link) {
        const tempWindow = window.open(link)
        this._currentWindow = tempWindow
    }

    close() {
        try {   
            this._currentWindow.close()
        } catch {}
        this._currentWindow = null
    }

    isOpened() {
        return !!this._currentWindow
    }

    get currentWindow() {
        return this._currentWindow
    }
}