import { DAYS_MS } from "./days.constant";
import { Week } from "./week"

class Calendar {

    #weeks = []

    /**
     * Формирование текущих недель
     * от текущей даты
     */
    constructor() {
        const currentWeek = this.#getCurrentWeek()
        this.#weeks = [currentWeek.previous(), currentWeek, currentWeek.next()]
    }

    /**
     * Текущие три недели
     * @returns {Array<Week>} недели
     */
    current() {
        return this.#weeks;
    }

    /**
     * Предыдущие три недели
     * @returns {Array<Week>} недели
     */
    previous() {
        this.#weeks = this.#weeks.map((week) => week.previous())
        return this.#weeks
    }

    /**
     * Следующие три недели
     * @returns {Array<Week>} недели
     */
    next() {
        this.#weeks = this.#weeks.map((week) => week.next())
        return this.#weeks
    }

    #getCurrentWeek() {
        return Week.create(this.#getCurrentWeekDays())
    }

    #getCurrentWeekDays() {
        const weekEndDay = this.#getWeekEndDay()
        return DAYS_MS.reduce((acc, dayMs) => {
            acc.push(new Date(weekEndDay.getTime() - dayMs))
            return acc;
        }, []).reverse()
    }

    #getWeekEndDay() {
        const currentDay = new Date()
        return new Date(
            currentDay.getTime() + DAYS_MS[7 - (currentDay.getDay() || 7)]
        );
    }
}

Calendar.create = () => new Calendar()

export { Calendar }
