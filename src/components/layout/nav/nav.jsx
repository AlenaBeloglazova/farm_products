import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/components/app/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>,
  },
  { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> },
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <li key={link.to}>{link.item}</li>
          ))}
      </ul>
    </nav>
  );
}

export default Nav;
