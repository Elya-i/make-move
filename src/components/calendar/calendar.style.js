import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CalendarStyled = styled.div`
    padding: 1em 0;
`

export const WeekDaysStyled = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.palette.nav.fontColor}
`;

export const DayStyled = styled.div`
    width: 40px;
    padding-bottom: 0.5em;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-align: center;
`

export const CellsContainerStyled = styled.div`
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const WeekStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100vw - 32px);

    & + & {
        margin-left: 20px;
    }
`

export const CellsStyled = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.palette.nav.fontColor}
    overflow-x: hidden;
    width: calc((100vw - 32px) * 3 + 60px)
`;

export const CellStyled = styled.div(({ theme, selected }) => css`
    width: 40px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: ${theme.font.weight.medium};
    border-radius: 8px;
    ${selected ? '' : `border: 1px solid ${theme.palette.nav.fontColor};`}
    ${selected ? `
        color: ${theme.palette.nav.selectedColor};
        background-color: ${theme.palette.calendar.selectedBg};
    ` : ''}
`)
