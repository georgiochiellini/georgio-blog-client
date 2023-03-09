import {makeAutoObservable} from 'mobx'

export default class MobileStore {
    constructor() {
        this._data = false
        makeAutoObservable(this)
    }

    setData(bool) {
        this._data = bool
    }

    get data() {
        return this._data
    }
}