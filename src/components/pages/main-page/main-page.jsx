import React from "react";
import About from "/src/components/blocks/about/about";
import Advantages from "/src/components/blocks/advantages/advantages";

function MainPage({ cards }) {
  return (
    <>
      <About />
      <Advantages cards={cards} />
    </>
  );
}

export default MainPage;
