import { CalendarStyled, WeekDaysStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { useDay } from './day-hook'
import { DAYS } from './days.constant'

export const Calendar = (props) => {
    const [getDate, getSelected, threeWeeks] = useDay()

    return (
        <CalendarStyled>
            <WeekDaysStyled>
                {DAYS.map(({ id, name }) => <DayStyled key={id}>{name}</DayStyled>)}
            </WeekDaysStyled>


            <CellsStyled>
                {threeWeeks.map((date) => <CellStyled key={date.getDate()}>{date.getDate()}</CellStyled>)}
            </CellsStyled>
        </CalendarStyled>
    );
}
