import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Button from "/src/components/ui/button/button";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
