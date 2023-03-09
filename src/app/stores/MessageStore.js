import {makeAutoObservable} from 'mobx'

export default class MessageStore {
    constructor() {
        this._messages = []
        this._limit = 5
        this._delay = 5000  // ms
        makeAutoObservable(this)
    }

    get data() {
        return this._messages
    }

    remove(message) {
        const index = this._messages.indexOf(message)
        if (index === 0) this._messages = this._messages.slice(1)
        else this._messages = this._messages.splice(index, 1).slice()
    }

    add(message) {
        if (this._messages.length === this._limit) return
        this._messages.push(message)
        setTimeout(() => this.remove(message), this._delay)
    }
}