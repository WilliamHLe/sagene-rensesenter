import * as React from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Maps from "../components/Maps";

const IndexPage = function () {
  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <header>
          <Topbar />
          <LogoSection />
          <Navbar />
        </header>
        <Hero />
        <Maps />
      </Layout>
    </main>
  );
};

export default IndexPage;
