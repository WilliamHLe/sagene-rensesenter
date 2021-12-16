import * as React from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";

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
      </Layout>
    </main>
  );
};

export default IndexPage;
