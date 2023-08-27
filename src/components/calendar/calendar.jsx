import { CalendarStyled, WeekDaysStyled, CellsContainerStyled, WeekStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { useCalendar } from './impl/calendar-hook'
import { DAYS } from './impl/days.constant'

export const Calendar = (props) => {
    const [weeks, getPrev, getNext] = useCalendar()

    return (
        <CalendarStyled>
            <WeekDaysStyled>
                {DAYS.map(({ id, name }) => <DayStyled key={id}>{name}</DayStyled>)}
            </WeekDaysStyled>

            <CellsContainerStyled onScroll={({ target }) => {
                if (target.scrollLeft > 80) {
                    console.log('swipe')
                }
            }}>
                <CellsStyled>
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
