import React from "react";
import styled from "styled-components";

const PriceSection = () => {
  return <PriceContainer></PriceContainer>;
};

export default PriceSection;

const PriceContainer = styled.div`
  min-height: 100vh;
  background-color: lightblue;
  padding: 5rem calc((100vw - 1300px) / 2);
`;
