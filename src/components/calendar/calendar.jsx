import { useEffect, useRef } from 'react'
import { CalendarStyled, WeekDaysStyled, CellsContainerStyled, WeekStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { useCalendar } from './impl/calendar-hook'
import { DAYS } from './impl/days.constant'

export const Calendar = (props) => {
    const [weeks, getPrev, getNext] = useCalendar()
    const scroll = useRef(null)
    const cells = useRef(null)

    useEffect(() => {
        const { current } = scroll
        current.scrollTo({
            left: (current.scrollWidth - current.clientWidth) / 2
        })

        cells.current.style.display = 'flex'
    }, [])

    return (
        <CalendarStyled>
            <WeekDaysStyled>
                {DAYS.map(({ id, name }) => <DayStyled key={id}>{name}</DayStyled>)}
            </WeekDaysStyled>

            <CellsContainerStyled ref={scroll} onScroll={({ target }) => {
                if (target.scrollLeft > 80) {

                }
            }}>
                <CellsStyled ref={cells}>
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
