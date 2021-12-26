import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Footer from "./Footer";
import Topbar from "./header/Topbar";
import LogoSection from "./header/LogoSection";
import Navbar from "./header/Navbar";
import Sidebar from "./header/Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <header>
        <Topbar />
        <LogoSection />
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
