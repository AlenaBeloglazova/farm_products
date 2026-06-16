import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <span>Создано 2021</span>
    </StyledFooter>
  );
}

export default Footer;
