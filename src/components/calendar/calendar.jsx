import { CalendarStyled, WeekDaysStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { useCalendar } from './impl/calendar-hook'
import { DAYS } from './impl/days.constant'

export const Calendar = (props) => {
    const [weeks, getPrev, getNext] = useCalendar()

    return (
        <CalendarStyled>
            <WeekDaysStyled onClick={getNext}>
                {DAYS.map(({ id, name }) => <DayStyled key={id}>{name}</DayStyled>)}
            </WeekDaysStyled>

            <CellsStyled onClick={getPrev}>
                {weeks
                    .flatMap((week) => week.getDates())
                    .map((date) => <CellStyled key={date.getDate()}>{date.getDate()}</CellStyled>)}
            </CellsStyled>
        </CalendarStyled>
    );
}
