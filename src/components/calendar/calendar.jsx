import { useEffect, useState, useRef } from 'react'
import { CalendarStyled, WeekDaysStyled, CellsContainerStyled, WeekStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { useCalendar } from './impl/calendar-hook'
import { DAYS } from './impl/days.constant'

const BORDER = 80

export const Calendar = (props) => {
    const [visible, setVisible] = useState(false)
    const [currentScroll, setCurrentScroll] = useState(0)

    const [weeks, getPrev, getNext] = useCalendar()
    const scroll = useRef()

    useEffect(() => {
        const { current } = scroll
        setCurrentScroll(current.scrollLeft)
        current.scrollTo((current.scrollWidth - current.clientWidth) / 2, 0)
        setVisible(true)
    }, [])

    useEffect(() => {
        getPrev()
        const { current } = scroll
        setCurrentScroll(current.scrollLeft)
        current.scrollTo((current.scrollWidth - current.clientWidth) / 2, 0)
    }, [currentScroll])

    const handleScroll = ({ target }) => {
        const { current } = scroll
        if (currentScroll - target.scrollLeft > BORDER) {
            current.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
            setCurrentScroll(target.scrollLeft)
        } else if (target.scrollLeft - currentScroll > BORDER) {
            current.scrollTo({
                left: current.scrollWidth,
                behavior: 'smooth'
            })
            setCurrentScroll(target.scrollLeft)
        }
    }

    return (
        <CalendarStyled>
            <WeekDaysStyled>
                {DAYS.map(({ id, name }) => <DayStyled key={id}>{name}</DayStyled>)}
            </WeekDaysStyled>

            <CellsContainerStyled ref={scroll} onScroll={handleScroll}>
                <CellsStyled visible={visible}>
                    {weeks.flatMap((week) => (
                        <WeekStyled key={week.getId()}>
                            {week
                                .getDates()
                                .map((date) => <CellStyled key={date.getDate()}>{date.getDate()}</CellStyled>)}
                        </WeekStyled>
                    ))}
                </CellsStyled>
            </CellsContainerStyled>
        </CalendarStyled>
    );
}
