import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import AdvantagesCard from "/src/components/ui/advantages-card/advantages-card";
import {
  AdvantagesSection,
  AdvantagesItem,
  AdvantagesList,
  StyledTitle,
  StyledButton,
} from "./styles";

function Advantages({ cards }) {
  return (
    <AdvantagesSection>
      {cards?.length ? (
        <>
          <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
          <AdvantagesList>
            {cards.map((card) => (
              <AdvantagesItem key={card.id}>
                <AdvantagesCard {...card} />
              </AdvantagesItem>
            ))}
          </AdvantagesList>
          <StyledButton> Купить </StyledButton>
        </>
      ) : null}
    </AdvantagesSection>
  );
}

export default Advantages;
