import { CalendarStyled, CellStyled, DayStyled, ItemStyled } from './calendar.style';

export const Calendar = (props) => {
    const days = [
        { id: 1, name: 'ПН' },
        { id: 2, name: 'ВТ' },
        { id: 3, name: 'СР' },
        { id: 4, name: 'ЧТ' },
        { id: 5, name: 'ПТ' },
        { id: 6, name: 'СБ' },
        { id: 0, name: 'ВС' }
    ]

    const today = new Date()
    const dates = []
    const getDayMillis = (d) => d * 24 * 60 * 60 * 1000;

    for (let i = 0; i < 7; i++) {
        dates.push(new Date(today.getTime() - getDayMillis(i)))
    }

    const getDate = (day) => dates.find((date) => date.getDay() === day)

    return (
        <CalendarStyled>
            {days.map(({ id, name }) => (
                <ItemStyled key={id}>
                    <DayStyled>{name}</DayStyled>
                    <CellStyled selected={getDate(id).getDay() === today.getDay()}>{getDate(id).getDate()}</CellStyled>
                </ItemStyled>
            ))}
        </CalendarStyled>
    );
}
