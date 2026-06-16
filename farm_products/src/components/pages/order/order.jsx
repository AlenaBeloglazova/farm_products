import { useState } from "react";
import ProductCard from "/src/components/ui/product-card/product-card";
import Border from "/src/components/ui/border/border";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel,
} from "./styles";

import { SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Order({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (summ, product) => summ +product.price,
    0
  );
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  const sortedProducts = [...products].sort((a, b) => {
    const aSelected = selectProductIds.includes(a.id);
    const bSelected = selectProductIds.includes(b.id);

    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;

    return 0;
  });

  return products && products.length ? (
    <StyledOrder>
      <LeftColumn>
        <Border marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h3" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукт
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Border>
        <Border marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h3" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Сделать заказ
          </Title>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button maxWidth onClick={handleBuyClick}>
            Купить
          </Button>
        </Border>
      </LeftColumn>
      <ProductSwiper
        modules={[Mousewheel, Pagination, Scrollbar]}
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction",
        }}
      >
        {sortedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default Order;
