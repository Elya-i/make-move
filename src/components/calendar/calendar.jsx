import { useState } from 'react';
import { CalendarStyled, WeekDaysStyled, CellsContainerStyled, WeekStyled, CellsStyled, CellStyled, DayStyled } from './calendar.style';
import { DAYS } from './impl/days.constant'

export const Calendar = (props) => {
    const [startValue, setStartValue] = useState(0);
    const [lastValue, setLastValue] = useState(0);

    const handleStart = (e) => {
        setStartValue(e.touches[0].clientX)
    }

    const handleMove = (e) => {
        const { clientX, screenX } = e.touches[0]
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
                <WeekStyled translate={lastValue}>
                    <CellStyled>1</CellStyled>
                    <CellStyled>2</CellStyled>
                    <CellStyled>3</CellStyled>
                    <CellStyled>4</CellStyled>
                    <CellStyled>5</CellStyled>
                    <CellStyled>6</CellStyled>
                    <CellStyled>7</CellStyled>
                    <CellStyled>1</CellStyled>
                    <CellStyled>2</CellStyled>
                    <CellStyled>3</CellStyled>
                    <CellStyled>4</CellStyled>
                    <CellStyled>5</CellStyled>
                    <CellStyled>6</CellStyled>
                    <CellStyled>7</CellStyled>
                </WeekStyled>
            </CellsStyled>
        </CalendarStyled>
    );
}
