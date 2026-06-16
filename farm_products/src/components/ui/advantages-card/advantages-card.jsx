import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";

import { StyledCard, Header, Feature } from "./styles";

function AdvantagesCard({ title, description, image, feature, isNegative }) {
  return (
    <StyledCard isNegative={isNegative}>
      <Header>
        <img src={image} alt="" width="56" height="56" />
        <div>
          <Feature isNegative={isNegative}>{feature}</Feature>
          <Title as="h3" size={TitleSize.SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <p>{description}</p>
    </StyledCard>
  );
}

export default AdvantagesCard;
