import { useState } from 'react';
import { CalendarStyled, WeekDaysStyled, WeekStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { DAYS } from './impl/days.constant'
import { useCalendar } from './impl/calendar-hook';

const screenCenter = window.innerWidth / 2
const weekWidth = (window.innerWidth - 32) * 3 + 16

export const Calendar = (props) => {
    const [weeks, getPrev, getNext] = useCalendar();
    const [startValue, setStartValue] = useState(0);
    const [lastValue, setLastValue] = useState(weekWidth / 3 * -1 - 2);

    const handleStart = (e) => {
        setStartValue(e.touches[0].clientX)
    }

    const handleMove = (e) => {
        const { clientX } = e.touches[0]
        const currentValue = Math.floor(clientX) / 50

        if (clientX - startValue > 0) {
            setLastValue(lastValue + currentValue)
        } else {
            setLastValue(lastValue - Math.abs(currentValue))
        }
    }

    return (
        <CalendarStyled>
            <WeekDaysStyled>
                {DAYS.map(({ id, name }) => <DayStyled key={id}>{name}</DayStyled>)}
            </WeekDaysStyled>

            <CellsStyled onTouchStart={handleStart} onTouchMove={handleMove}>
                <WeekStyled translate={lastValue} width={weekWidth}>
                    {weeks.flatMap((week) => week.getDates()).map((date) => (
                        <CellStyled key={date.getTime()}>{date.getDate()}</CellStyled>
                    ))}
                </WeekStyled>
            </CellsStyled>
        </CalendarStyled>
    );
}
