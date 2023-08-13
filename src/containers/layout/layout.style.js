import styled from "@emotion/styled";

export const LayoutStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 4em 1em 80px 1em;
  overflow-y: auto;
  color: ${({ theme }) => theme.palette.move.main};
  background-color: ${({ theme }) => theme.palette.layout.background };
`
