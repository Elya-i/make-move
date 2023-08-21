import { DAYS_MS, WEEK_MS } from './days.constant'

const getPrevWeekDates = (dates) => dates.map((date) => new Date(date.getTime() - WEEK_MS))
const getNextWeekDates = (dates) => dates.map((date) => new Date(date.getTime() + WEEK_MS))

/**
 * @returns [days, getDate, getSelected]
 */
export const useDay = () => {
    const currentDay = new Date()
    const weekEndDay = new Date(currentDay.getTime() + DAYS_MS[7 - (currentDay.getDay() || 7)]);

    const currentDates = DAYS_MS.reduce((acc, dayMs) => {
        acc.push(new Date(weekEndDay.getTime() - dayMs))
        return acc;
    }, []).reverse()

    const getDate = (day) => currentDates.find((date) => date.getDay() === day)
    const getSelected = (id) => getDate(id).getTime() === currentDay.getTime()

    return [
        getDate,
        getSelected,
        [
            ...getPrevWeekDates(currentDates),
            ...currentDates,
            ...getNextWeekDates(currentDates)
        ]
    ]
}
