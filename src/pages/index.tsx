import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Maps from "../components/Maps";
import ServiceSection from "../components/ServiceSection";
import PriceSection from "../components/PriceSection";
import SEO from "../components/seo";

const IndexPage = function () {
  return (
    <main>
      <SEO
        title="Renseri, vaskeri, skredder på Sagene - Sagene Rensesenter"
        description="Sagene Rensesenter tilbyr tjenester innen vaskeri, renseri og skredderi."
      />
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
