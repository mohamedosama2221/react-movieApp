import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.main} !important;
`;
export const Wrapper = styled(Nav)``;

export const Links = styled.span`
  color: ${(props) => props.theme.colors.lightRed} !important;
  text-decoration: none !important;
  font-weight: bold;
  font-size: 1.8rem;
  transition: all 0.5s ease;

  &:hover {
    color: white !important;
    transition: all 0.5s ease;
  }
  ${({ notfound }) =>
    notfound &&
    css`
      opacity: 0.35;
      font-size: 3rem;
      text-align: center;
      margin: 3rem 0;
      &:hover {
        color: ${(props) => props.theme.colors.lightRed} !important;
      }
    `}
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.lightRed} !important;
  background-color: white !important;
  transition: all 0.5s ease;
  font-size: 1rem !important;
  font-weight: bold;
  border-color: ${(props) => props.theme.colors.lightRed} !important;

  &:hover {
    color: white !important;
    background-color: ${(props) => props.theme.colors.lightRed} !important;
    transition: all 0.5s ease;
  }
`;
