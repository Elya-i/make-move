import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CalendarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    color: ${({ theme }) => theme.palette.nav.fontColor}
`;

export const ItemStyled = styled.div`
    width: 40px;
`

export const DayStyled = styled.div`
    padding-bottom: 0.5em;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-align: center;
`

export const CellStyled = styled.div(({ theme, selected }) => css`
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
