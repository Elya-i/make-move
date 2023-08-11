import styled from "@emotion/styled";

export const LayoutStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.layout.background };
`
