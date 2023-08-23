import { WEEK_MS } from "./days.constant"

class Week {

    #dates = []

    constructor(weekDays) {
        this.#dates = weekDays
    }

    getDates() {
        return this.#dates
    }

    previous() {
        return new Week(this.#dates.map((date) => new Date(date.getTime() - WEEK_MS)))
    }

    next() {
        return new Week(this.#dates.map((date) => new Date(date.getTime() + WEEK_MS)))
    }
}

Week.create = (weekDays) => new Week(weekDays)

export { Week }
