import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Footer from "./Footer";
import Topbar from "./header/Topbar";
import LogoSection from "./header/LogoSection";
import Navbar from "./header/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <Topbar />
        <LogoSection />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
