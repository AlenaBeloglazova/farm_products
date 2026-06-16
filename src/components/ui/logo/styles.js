import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 28px;
  gap: 24px;
  color: ${(props) => props.theme.fontColorBlack};
`;

export const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
  gap: 24px;
  align-items: center;
`;

const logoStyle = css`
  gap: 24px;
  display: flex;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  color: ${(props) => props.theme.fontColorBlack};
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.fontColorBlack};
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;
