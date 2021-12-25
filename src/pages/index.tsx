import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Maps from "../components/Maps";
import ServiceSection from "../components/ServiceSection";
import PriceSection from "../components/PriceSection";

const IndexPage = function () {
  return (
    <main>
      <title>Sagene Rensesenter - Rens, vask og skredder på Sagene</title>
      <Layout>
        <Hero />
        <ServiceSection />
        <PriceSection />
        <Maps />
      </Layout>
    </main>
  );
};

export default IndexPage;
