import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1em;
  width: 100%;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.layout.background };
`

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`

export const LogoStyled = styled.img`
  display: inline-block;
  padding-left: 0.2em;
`

export const CursiveStyled = styled.span`
  font-style: italic;
  font-size: 1em;
  display: inline-block;
`
