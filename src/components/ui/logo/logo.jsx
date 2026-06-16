import React from "react";
import logo from "/src/assets/logo.png";
import { LogoText, LogoLink, StyledLogoMainPage, StyledLogo } from "./styles";
import { AppRoute } from "/src/components/app/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <img src={logo} alt="Логотип" />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogoMainPage>
  ) : (
    <LogoLink to={AppRoute.MAIN}>
      <img src={logo} alt="Логотип" />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
