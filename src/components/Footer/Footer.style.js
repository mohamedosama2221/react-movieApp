import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.main} !important;
  font-weight: normal;
  padding: 1.2rem 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.lightRed};
`;
