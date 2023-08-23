import { useCallback, useMemo, useState } from 'react'
import { Calendar } from './calendar'

export const useCalendar = () => {
    const calendar = useMemo(() => Calendar.create(), [])
    const [weeks, setWeeks] = useState(calendar.current())

    const getPrev = useCallback(() => setWeeks(calendar.previous()))
    const getNext = useCallback(() => setWeeks(calendar.next()))

    return [weeks, getPrev, getNext]
}
