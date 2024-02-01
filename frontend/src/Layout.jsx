import React from "react";
import TopBar from "./components/header/topBar";
import MiddleBar from "./components/header/middleBar";
import BottomBar from "./components/header/bottomBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <TopBar />
        <MiddleBar />
        <BottomBar />
      </header>

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
