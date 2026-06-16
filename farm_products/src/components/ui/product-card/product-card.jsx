import React from "react";
import Border from "/src/components/ui/border/border";
import { TitleSize } from "/src/components/ui/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/options-list/options-list";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <Border>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Border>
  );
}

export default ProductCard;
