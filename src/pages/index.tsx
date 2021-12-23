import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Maps from "../components/Maps";

const IndexPage = function () {
  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <Hero />
        <Maps />
      </Layout>
    </main>
  );
};

export default IndexPage;
