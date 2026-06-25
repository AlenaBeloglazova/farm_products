import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import { StyledPageWrapper } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper() {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        <Outlet />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;
